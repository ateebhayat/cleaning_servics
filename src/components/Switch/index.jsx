import { Stack, styled, Switch, Typography } from '@mui/material';
import * as React from 'react';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 70, // Width set to 70px
  height: 28, // Height set to 28px
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 26, // Thumb size when active (larger thumb during transition)
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(42px)', // Adjusted to fit new size (70px width)
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 4, // Adjust padding to fit the size properly
    '&.Mui-checked': {
      transform: 'translateX(42px)', // Adjusted for checked state at full width
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
         backgroundColor: 'red',
          opacity:'0.45',
        ...theme.applyStyles('dark', {
          backgroundColor: 'red',
          opacity:'0.45'
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 18, // Thumb width when not active (original size)
    height: 18, // Thumb height to match aspect ratio
    borderRadius: '100px', // Rounded corners to match thumb size
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    transition: theme.transitions.create(
      ['transform', 'width', 'background-color'],
      {
        duration: 500, // Duration for smooth transition
      }
    ),
  },
  '& .MuiSwitch-track': {
    borderRadius: 14, // Adjusted to fit the new size
     backgroundColor: 'red',
    opacity:'0.45',
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
        backgroundColor: 'red',
        opacity:'0.45',
    }),
  },
}));

export default function IOSSwitch({handleChnage, platform}) {
  return (
    <Stack direction="row" spacing={'18px'} sx={{ alignItems: 'center' , justifyContent:'center', marginBottom:'30px', paddingTop:'60px'}}>
      <Typography>For iOS</Typography>
      <AntSwitch checked={platform==='android'} onChange={handleChnage}inputProps={{ 'aria-label': 'platfrom toggle',}} />
      <Typography>For Android</Typography>
    </Stack>
  );
}
