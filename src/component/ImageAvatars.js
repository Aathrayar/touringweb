import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './ImageAvatars.css';
import mee from '../assets/mee.jpg';

 function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
    
    <div className='aathil'>

    <Avatar alt="Remy Sharp" src={mee} style={{marginLeft:"700px"}}/>

    </div>
   
     
    </Stack>
  );
}

export default ImageAvatars;