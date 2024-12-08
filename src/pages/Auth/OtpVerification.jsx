import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, InputBase, Typography, Link } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { OTP_PARAM } from '../../constants';
import useVerifyOtp from '../../api/hooks/use-verify-otp';

const OTPForm = () => {
  const { mutateAsync: verifyOtp, isPending } = useVerifyOtp();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [searchParams] = useSearchParams();
  const otpFromUrl = searchParams.get(OTP_PARAM.VERIFICATION_CODE);

  useEffect(() => {
    if (otpFromUrl && otpFromUrl.length === otp.length) {
      // Split OTP into individual digits
      setOtp(otpFromUrl.split(''));
    }
  }, []);
  const handleChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to the next input if value is entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   await verifyOtp({
      otp:otpFromUrl
    });

  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          p: 4
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
          Verify Your OTP
        </Typography>
        <Typography textAlign="center" color="textSecondary" mb={2}>
          Enter the 6-digit OTP sent to your email.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container justifyContent="center" spacing={1} mb={3}>
            {otp.map((value, index) => (
              <Grid item key={index}>
                <InputBase
                  id={`otp-input-${index}`}
                  value={value}
                  onChange={(e) => handleChange(e.target.value, index)}
                  sx={{
                    width: 50,
                    height: 50,
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    border: '1px solid #d1d5db',
                    borderRadius: 1,

                    '&:focus': {
                      borderColor: 'primary.main',
                      boxShadow: (theme) => `0 0 0 3px ${theme.palette.primary.light}`,
                      outline: 'none'
                    },
                    '& [id*="otp-input"], & input[id*="otp-input"]': {
                      textAlign: 'center'
                    }
                  }}
                  inputProps={{
                    maxLength: 1
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" size="large" sx={{ textTransform: 'none' }} disabled={isPending}>
            Verify OTP
          </Button>
        </form>
        {/* <Typography textAlign="center" color="textSecondary" mt={2}>
          Didn’t receive the code?{' '}
          <Link href="#" color="primary" underline="hover">
            Resend OTP
          </Link>
        </Typography> */}
      </Container>
    </Box>
  );
};

export default OTPForm;
