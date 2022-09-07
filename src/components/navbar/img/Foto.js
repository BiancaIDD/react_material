import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Image from './Foto.png'
import './Foto.css'

export default function ImgAvatar() {
  return (
    <Stack direction="row" className='Img'>
      <Avatar src={Image} sx={{ width: 56, height: 56 }}/>
      
    </Stack>
  );
}