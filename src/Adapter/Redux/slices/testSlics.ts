import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    name:"Sourav Das"
}
const testSlice = createSlice({
    name:"testslice",
    initialState:intialState,
    reducers:{
        setData(state,action){
            state.name = action.payload
        }
    }
})
export const testAction = testSlice.actions
export default testSlice