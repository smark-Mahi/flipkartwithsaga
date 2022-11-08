import { configureStore } from '@reduxjs/toolkit';
import makeupReducer from './Makeup';
import makeupcartReducer from './makupcart'

export default configureStore({
    reducer:{
       makeup:makeupReducer,
       makeupcart:makeupcartReducer
      
    }
})