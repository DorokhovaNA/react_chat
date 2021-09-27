import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router";
import AppBar from "../AppBar/AppBar";
<<<<<<< Updated upstream
//import { initMessageTracking } from "../Chat/actions";
=======
import { initMessageTracking } from "../Chat/ChatActions";
>>>>>>> Stashed changes

const CustomRoute = ({ secured, children, withAppBar, ...rest }) => {
	const {isAuth} = useSelector((state) => state.chat);
	const dispatch = useDispatch();
	console.log(secured);
	console.log(withAppBar);

<<<<<<< Updated upstream
	// useEffect(() => {
	// 	dispatch(initMessageTracking());
	// }, [dispatch]);
=======
	useEffect(() => {
		dispatch(initMessageTracking());
	}, [dispatch]);
>>>>>>> Stashed changes
	
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