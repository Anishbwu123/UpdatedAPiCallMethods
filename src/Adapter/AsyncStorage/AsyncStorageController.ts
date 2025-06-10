import AsyncStorage from "@react-native-async-storage/async-storage";

export enum PersistanceStorageKey {
    TOKEN = 'getspecified@token_authorization2025',
    USER_INFO = 'getspecified@user_authorization2025',
    REFRESH_TOKEN = 'getspecified@refreshtoken_authorization2025',
    LOGIN_INFO = 'getspecified@logininfo_authorization2025',

}


class PersistanceStorage {
    private setData = async (
        key: PersistanceStorageKey,
        value: object | string | number,
    ): Promise<void> => {
        try {
            await AsyncStorage.setItem(key.toString(), JSON.stringify(value));
        } catch (err: unknown) {
            throw err;
        }
    };

    private getData = async (key: PersistanceStorageKey) => {
        try {
            const value: string | null = await AsyncStorage.getItem(key.toString());
            if (value) {
                return JSON.parse(value);
            } else {
                return null;
            }
        } catch (err) {
            throw err;
        }
    };

    private removeData = async (key: PersistanceStorageKey) => {
        try {
            await AsyncStorage.removeItem(key.toString());
        } catch (err) {
            throw err;
        }
    };
    private getAllData = async () => {
        try {

            const keys = await AsyncStorage.getAllKeys();
            const stores = await AsyncStorage.multiGet(keys)
            const allData = Object.fromEntries(
                stores.map(([key, value]) => [key, value ? JSON.parse(value) : value])
            );
            return allData

        } catch (e) {
            throw e
        }
    }

    SET_DATA = async (
        key: PersistanceStorageKey,
        value: object | string | number,
    ) => {
        try {
            await this.setData(key, value);
        } catch (err) {
            console.log(err);
        }
    };
    GET_DATA = async (key: PersistanceStorageKey): Promise<string | false> => {
        try {
            const fetch_data = await this.getData(key);
            if (fetch_data) {
                return fetch_data;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    CLEAR_ALL = async () => {
        try {
            await AsyncStorage.clear();
            console.log('All data clear from async storage');
        } catch (err) {
            console.log(err);
        }
    };
    GET_ALL_DATA = async () => {
        try {
            const allData = await this.getAllData()
            if (allData) {
                return allData
            } else {
                return false;
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const AsyncStorageController = new PersistanceStorage()