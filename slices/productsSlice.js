import { createSlice } from '@reduxjs/toolkit'
import {  combineReducers } from 'redux'


export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        selectedProduct:{},

    },
    reducers: {
        set_products: (state, action) => {
            return { ...state, allProducts: action.payload }
        },

        

        selected_product: (state, action) => {
            return { ...state, selectedProduct: action.payload }
        },
    }
        



    ,
})

// export const productsSlice = createSlice({
//     name: 'products',
//     initialState:{
//         products:[],
        
//     },
//     reducers: {
//         set_products:(state,action)=>{
//             return {...state,products:action.payload}
//         },

       
        
//     },
// })

// export const selectedProductSlice = createSlice({
//     name: 'selectedProduct',
//     initialState: {
       
//         selectedProduct: {}
//     },
//     reducers: {
        
//         selected_product: (state, action) => {
//             return { ...state, selectedProduct: action.payload }
//         },

//     },
// })

// const reducers = combineReducers({
//     products: productsSlice.reducer,
//     selectedproduct: selectedProductSlice.reducer,
// })
// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { set_products, selected_product } = productsSlice.actions
// export const {  selected_product}=selectedProductSlice.actions


export default productsSlice.reducer