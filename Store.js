import { configureStore } from "@reduxjs/toolkit";

import ItemReducer from './src/Features/Items/itemSlice'
import SalesReducer from './src/Features/Sales/salesSlice'
import PurchaseReducer from './src/Features/Purchase/purchaseSlice'
import UserReducer from './src/Ui/userSlice'

const store=configureStore({
    reducer:{
        item:ItemReducer,
        sales:SalesReducer,
        purchase:PurchaseReducer,
        user:UserReducer
    }
})


export default store