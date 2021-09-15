import { createSlice } from "@reduxjs/toolkit";

export const URL_API = "https://goweather.herokuapp.com/weather/murmansk";

export const WeatherSlice = createSlice({
    name: "weather",
    initialState: {
		loading: false,
		error: false,
		data: null,
	},
    reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload
		},
		setError: (state, action) => {
			state.error = action.payload
		},
		setData: (state, action) => {
			state.data = action.payload
		},
    }
});

export const { setLoading, setError, setData, data } = WeatherSlice.actions;

export default WeatherSlice.reducer;