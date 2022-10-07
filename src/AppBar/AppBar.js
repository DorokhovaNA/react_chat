import { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import ChatPreview from "./ChatPreview";
import "./AppBar.css";

const useStyles = makeStyles(() => ({
  input: {
    "& div": {
      borderRadius: "40px",
      "& input": {
        padding: "10px 10px",
        width: "10vw",
      },
    },
  },
}));

const AppBar = () => {
  const classes = useStyles();
  const { users, messageArray } = useSelector((state) => state.chat);
  const [anchorEl, setAnchorEl] = useState(null);
  const { isAuth } = useSelector((state) => state.chat);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Drawer variant="permanent" anchor="left">
      <div />
      <Box className="searchBox">
        <IconButton onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          anchorPosition={{ top: 50, left: 25 }}
          anchorReference={"anchorPosition"}
        >
          <MenuItem className="menuBurg" key={1}>
            <Link to="/" onClick={() => history.push("/")} className="link">
              Home
            </Link>
          </MenuItem>
          <MenuItem key={2}>
            <Link
              to="/weather"
              onClick={() => history.push("/weather")}
              className="link"
            >
              Weather
            </Link>
          </MenuItem>
          <MenuItem key={3}>
            <Link
              to="/users"
              onClick={() => history.push("/users")}
              className="link"
            >
              Users
            </Link>
          </MenuItem>
        </Menu>
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Поиск"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box className="mainWrapper">
        {isAuth ? users.map((user) => (
          <ChatPreview key={user.id} user={user} messageArray={messageArray[user.id]} />
        )): 
        <span>
              <p className="text">Авторизуйтесь для возможности отправлять сообщения</p>
              <Link className="text text-link" to={'/login'}>Перейти на страницу авторизации</Link>
        </span>}
        
      </Box>
    </Drawer>
  );
};

export default AppBar;
