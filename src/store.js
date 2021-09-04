import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './Users/UsersSlice';
import userReducer from './Users/UsersSlice';

export default configureStore({
  reducer: {
    chatReducer,
    user: userReducer,
  }
})