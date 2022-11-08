import {createSlice} from '@reduxjs/toolkit';

const initialStateValue=[]
export const makupcartSlice=createSlice({
    name:'makupcart',
    initialState:{value:initialStateValue},
    reducers:{
        addcart:(state,action)=>{
            state.value=[...state.value,action.payload]
            console.log(initialStateValue.item)
        },
        deletecart:(state,action)=>{
            state.value=state.value.filter((product)=>product.id===action.payload.id?product.quantity=action.payload.quantity:product.quantity)
            console.log(initialStateValue)  
        }
    },
});
export const {addcart,deletecart}=makupcartSlice.actions;
export default makupcartSlice.reducer;