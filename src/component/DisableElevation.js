import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CustomizedDialogs from './CustomizedDialogs';

export default function DisableElevation() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Stack>
            <Button variant="contained" disableElevation onClick={handleClickOpen}>
                Join With Us
            </Button>
            <CustomizedDialogs state={open} setOpen={setOpen} />
        </Stack>
    );
}
