import { AppBar as MaterialUiAppBar } from "@material-ui/core";
import './AppBar.css'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const AppBar = () => {
    return (
        <MaterialUiAppBar className="AppBar">
            <Toolbar>
                <Typography>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/chat" className="link">Chat</Link>  
                    <Link to="/users" className="link">Users</Link>
                </Typography>
            </Toolbar>
        </MaterialUiAppBar>
    )
}

export default AppBar;