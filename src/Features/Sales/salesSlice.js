import { createSlice } from "@reduxjs/toolkit"


const initialState={
    sales:null
}

const salesSlice=createSlice({
    name:'sales',
    initialState,
    reducers:{
        addSales(state,action){
            state.sales=action.payload
        }
    }
})

export const{addSales}=salesSlice.actions

export default salesSlice.reducer