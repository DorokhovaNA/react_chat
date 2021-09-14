import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './Chat/ChatSlice';
import userReducer from './Users/UsersSlice';
import ThunkMiddleware  from 'redux-thunk';

export default configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer,
  },
  middleware: [ThunkMiddleware]
});