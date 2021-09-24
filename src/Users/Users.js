import './Users.css'
import React  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { yourName, yourMail } from './UsersSlice.js'

const Users = () => {
    const [open, setOpen] = React.useState(false);

    const { userName } = useSelector((state) => state.user);
    const { userMail } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleChangeName = (event) => {
        dispatch(yourName(event.target.value || ''));
    };

    const handleChangeMail = (event) => {
        dispatch(yourMail(Number(event.target.value) || ''));
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="btnContainer">
        <Button variant="outlined" onClick={handleClickOpen}>
            Open for log in
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Authorization</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To authorize to this website, please enter your name and your email address here.
            </DialogContentText>
            <TextField
                autoFocus
                id="name"
                value={userName}
                onChange={handleChangeName}
                label="Name"
                type="name"
            /> <br />
            <TextField
                autoFocus
                id="name"
                value={userMail}
                onChange={handleChangeMail}
                label="Email Address"
                type="email"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} variant="outlined">
                Cancel
            </Button>
            <Button onClick={handleClose} variant="outlined">
                Continue
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default Users;