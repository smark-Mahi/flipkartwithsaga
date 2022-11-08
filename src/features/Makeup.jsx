import {createSlice} from '@reduxjs/toolkit';

const initialStateValue=[
]
export const makupSlice=createSlice({
    name:'makup',
    initialState:{value:initialStateValue},
    reducers:{
        products:(state,action)=>{
            state.value=action.payload
            console.log(initialStateValue)
        },
        searchproducts:(state,action)=>{
            state.value=action.payload
        }
        
    },
});
export const {products,searchproducts}=makupSlice.actions;
export default makupSlice.reducer;