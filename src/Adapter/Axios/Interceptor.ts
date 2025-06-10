import { ReactNode, useEffect } from "react";
import { axiosInstance } from "./axiosInstace";
import { AsyncStorageController, PersistanceStorageKey } from "../AsyncStorage/AsyncStorageController";
import { ApiQueryKeys } from "../Tanstack/ApiQueryKeys";
import { useAppDispatch } from "../Redux/useAppDispatch";
import { authAction } from "../Redux/slices/authSlice";

type Props = {
    children: ReactNode;
};

const Interceptor = ({ children }: Props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Request Interceptor
        const reqInterceptor = axiosInstance.interceptors.request.use(
            async (config) => {
                const storeToken = await AsyncStorageController.GET_DATA(PersistanceStorageKey.TOKEN);
                if (storeToken) {
                    config.headers.Authorization = `Bearer ${storeToken}`;
                }
                return config;
            }
        );

        // Response Interceptor
        const resInterceptor = axiosInstance.interceptors.response.use(
            response => response,
            async error => {
                const originalConfig = error.config;
                if (
                    error.response &&
                    error.response.status === 401 &&
                    !originalConfig._retry &&
                    originalConfig.url !== ApiQueryKeys.accessTokenGeneration // Prevent infinite loop
                ) {
                    originalConfig._retry = true;
                    console.log("Trying to fetch new token /..../")
                    const refreshToken = await AsyncStorageController.GET_DATA(PersistanceStorageKey.REFRESH_TOKEN);
                    console.log(refreshToken)
                    if (refreshToken) {
                        try {
                            const res = await axiosInstance.post(ApiQueryKeys.accessTokenGeneration,
                                {
                                    refreshToken: refreshToken,
                                }, {
                                headers: {
                                    "Content-Type": 'application/json',
                                }
                            });
                            console.log("Data ",res.data)
                            originalConfig.headers.Authorization = `Bearer ${res.data.token}`;
                            await AsyncStorageController.SET_DATA(PersistanceStorageKey.TOKEN, res.data.token);
                            await AsyncStorageController.SET_DATA(PersistanceStorageKey.REFRESH_TOKEN, res.data.refreshToken);
                            dispatch(authAction.setToken(res.data.token));
                            dispatch(authAction.setRefreshToken(res.data.refreshToken));
                            return axiosInstance(originalConfig); // <--- RETURN the retried request!
                        } catch (refreshError) {
                            // Handle refresh failure: logout, redirect, etc.
                            // dispatch(authAction.removeUserInfo());
                            // Optionally clear tokens and redirect to login
                            return Promise.reject(refreshError);
                        }
                    } else {
                        console.log("Im here")
                    }
                }
                return Promise.reject(error);
            }
        );

        // Cleanup
        return () => {
            axiosInstance.interceptors.request.eject(reqInterceptor);
            axiosInstance.interceptors.response.eject(resInterceptor);
        };
    }, [dispatch]);

    return children
};

export default Interceptor;