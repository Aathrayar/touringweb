// CustomizedDialogs.js
import React from 'react';
import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import SignUp from './SignUp';

const CustomizedDialogs = ({ state, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={state} onClose={handleClose}>
           
<SignUp/>

            <DialogActions>
                <Button onClick={handleClose}></Button>
            </DialogActions>
        </Dialog>
    );
};

export default CustomizedDialogs;
