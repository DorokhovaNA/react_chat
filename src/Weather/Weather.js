import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getWeather } from "./WeatherAction";
import "./Weather.css";


const Weather = () => {
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector(state => state.weather);
	console.log(data, loading, error);

	const getThunkWeather = useCallback(() => dispatch(getWeather()), [dispatch]);
	useEffect(() => {
		getThunkWeather();
	}, [getThunkWeather])
	return (
	<div className="weatherWrapper">
		<div>
			{loading && <CircularProgress />}
			{error && <div className="errorTable">Что-то пошло не так</div>}
			{!loading && !error && data && (
				<div className="forecastWrapper">
					<h5 className="forecastTitle">Weather in Murmansk</h5>
					<div className="forecastText">{data.temperature}</div>
					<div className="forecastText">{data.wind}</div>
					<div className="forecastText">{data.description}</div>	
				</div>	
			)}
		</div>
		<Button 
		variant="contained" 
		onClick={() => getThunkWeather()} 
		type="submit"
		disabled={loading}
		>
			Узнай погоду
		</Button>
	</div>
	)
}

export default Weather;