import { useMutation } from '@tanstack/react-query';
import { verifyOtp } from '../actions';
import { useNavigate } from 'react-router-dom'; // Import the navigate hook for routing
import toast from 'react-hot-toast';

const useVerifyOtp = () => {
    const navigate = useNavigate(); // Initialize navigate

    return useMutation({
        mutationFn: async ({ otp }) => {
            try {
                const user = await verifyOtp({ otp });
                return user;
            } catch (err) {
                console.log(err);
            }
        },
        onSuccess: () => {
            // Show the success toast notification
            toast.success("OTP Verified Successfully!");

            // Navigate to the home page after 2 seconds
            setTimeout(() => {
                navigate('/'); // Adjust to your home route if different
            }, 2000); // 2 seconds delay
        },
        onError: (error) => {
            // Optionally, show an error toast if there's an error
            toast.error(`Error: ${error.message}`);
        }
    });
};

export default useVerifyOtp;
