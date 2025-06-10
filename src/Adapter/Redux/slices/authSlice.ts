import { createSlice } from "@reduxjs/toolkit";

type LoginData = {
    email: string;
    token: string;
    refreshToken: string;
};
type UserInfo = {
    id: number
    name: string
    email: string,
    phone: string,
    imageLink: string | null,
    notificationPreference: {
        email: boolean,
        sms: boolean,
        push: boolean
    },
    avgRating: number,
    totalReviews: number,
}
type AuthState = {
    data: LoginData | null;
    user: UserInfo | null,
    accessToken: string | null,
    refreshToken: string | null,
};

const initialState: AuthState = {
    data: null,
    user: null,
    accessToken: null,
    refreshToken: null,
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload
        },
        removeData(state) {
            state.data = null
        },
        setUserInfo(state, action) {
            state.user = action.payload
        },
        removeUserInfo(state) {
            state.user = null;
        },
        setToken(state, action) {
            state.accessToken = action.payload

        },
        removeToken(state) {
            state.accessToken = null
        }
        ,
        setRefreshToken(state, action) {
            state.refreshToken = action.payload

        },
        removeRefreshToken(state) {
            state.refreshToken = null
        }
    }
})
export const authAction = authSlice.actions
export default authSlice