import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router";
import AppBar from "../AppBar/AppBar";
import { initMessageTracking } from "../Chat/ChatActions";


const CustomRoute = ({ secured, children, withAppBar, ...rest }) => {
	const {isAuth} = useSelector((state) => state.chat);
	const dispatch = useDispatch();
	console.log(secured);
	console.log(withAppBar);


	// useEffect(() => {
	// 	dispatch(initMessageTracking());
	// }, [dispatch]);

	useEffect(() => {
		dispatch(initMessageTracking());
	}, [dispatch]);

	
	if((secured && isAuth) || !secured) {

		return (
			<Route {...rest}>
				{withAppBar && <AppBar />}
				{children}
			</Route>
		);
	}
	
	return <Redirect to={{ pathname: "/login" }} />;
}

export default CustomRoute;