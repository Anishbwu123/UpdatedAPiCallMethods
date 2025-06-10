import { createSlice } from "@reduxjs/toolkit";

export type DataItems = {
    id: number,
    name: string,
    image: string,
    productCategoryTags: Array<any>
}
type CategoryType = {
    categories: DataItems[] | null;
}

const intialState: CategoryType = {
    categories: null,
}

const categorySlice = createSlice({
    name: "categorySlice",
    initialState: intialState,
    reducers: {
        setCategories(state,action){
            state.categories = action.payload
        }
    }

})
export const categoryAction = categorySlice.actions
export default categorySlice