import React from 'react';
import { Box, Typography, Button, Stack, Grid } from '@mui/material';
import IOSSwitch from '../../components/Switch';
import { QRCodeSVG } from 'qrcode.react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const AppPage = () => {
  const [platform, setPlatform] = React.useState('ios');

  const handleChange = (event) => {
    setPlatform(event.target.checked ? 'android' : 'ios');
  };

  return (
    <Box sx={{ padding: 3, background:'#f4f9f9' }}>
      <Typography variant="h6" component="h2" align="center" sx={{ color: '#fa7268', fontWeight: 'bold' }}>
        For Users App!
      </Typography>

      <Typography variant="h4" component="h1" align="center" sx={{ color: '#333', fontWeight: 'bold' }}>
        Your loyalty card right at your <br/>fingertips!
      </Typography>

      <IOSSwitch platform={platform} handleChnage={handleChange} />
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'center', alignItems: 'center' }} columnGap={6}>
        {/* QR Code Section */}
        <Box sx={{ background: '#fff', p: '10px', borderRadius: '6px', display: 'flex', justifyContent: 'center',alignItems:'center' }}>
          <QRCodeSVG value="https://reactjs.org/" size={466} />
        </Box>

        {/* Content Section */}
        <Stack direction="column" spacing={2} sx={{ maxWidth: 416 }}>
          <Typography variant="h6" sx={{  fontWeight: 'bold', color: '#333' }}>
             Download FLIK CLUB to start<br/> earning rewards!
          </Typography>
          <Typography variant="body1" sx={{ color: '#777' }}>
           Scan this QR code to begin your journey today.
          </Typography>
          <Stack direction="column" spacing={2}>
          <Typography variant="body1" sx={{ color: '#777' }}>
          <CheckCircleIcon sx={{
            fill:'red',
            opacity:'0.45'
          }}/> Free to download
            </Typography>
            <Typography variant="body1" sx={{ color: '#777' }}>
            <CheckCircleIcon sx={{
            fill:'red',
            opacity:'0.45'
          }}/> Never lose a loyalty card again
            </Typography>
            <Typography variant="body1" sx={{ color: '#777' }}>
            <CheckCircleIcon sx={{
            fill:'red',
            opacity:'0.45'
          }}/> Discover over 2000+ businesses
            </Typography>
            <Typography variant="body1" sx={{ color: '#777' }}>
            <CheckCircleIcon sx={{
            fill:'red',
            opacity:'0.45'
          }}/> Eco-friendly alternative to paper cards
            </Typography>
            <Typography variant="body1" sx={{ color: '#777' }}>
            <CheckCircleIcon sx={{
            fill:'red',
            opacity:'0.45'
          }}/> Discover loyalty schemes exclusive to FLIK CLUB
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AppPage;
