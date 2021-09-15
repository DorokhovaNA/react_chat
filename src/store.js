import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Chat/ChatSlice";
import userReducer from "./Users/UsersSlice";
import weatherReducer from "./Weather/WeatherSlice";
import ThunkMiddleware  from "redux-thunk";

export default configureStore({
    reducer: {
        chat: chatReducer,
        user: userReducer,
        weather: weatherReducer,
    },
    middleware: [ThunkMiddleware]
});