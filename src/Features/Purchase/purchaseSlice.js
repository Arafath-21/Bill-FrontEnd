import { createSlice } from "@reduxjs/toolkit"



const initialState={
    purchase:null
}


const purchaseSlie=createSlice({
    name:"purchase",
    initialState,
    reducers:{
        addPurchase(state,action){
            state.purchase=action.payload
        }
    }
})

 export const{addPurchase}=purchaseSlie.actions

 export default purchaseSlie.reducer
