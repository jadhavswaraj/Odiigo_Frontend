import axios from 'axios';
import { getTokens } from '../utils/auth';

// Define API base URL
const API_URL = 'http://10.0.2.2:3000/api/auth';

// Define response types (update these based on actual API responses)
interface SendOTPResponse {
  success: boolean;
  message: string;
}

interface VerifyOTPResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}

interface ProtectedDataResponse {
  data: any; // Update with actual response structure
}

// Function to send OTP
export const sendOTP = async (phone: string): Promise<SendOTPResponse> => {
  const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
  try {
    const response = await axios.post<SendOTPResponse>(`${API_URL}/send-otp`, {
      phone: formattedPhone,
    });
    console.log('Send OTP Success:', response.data); // Log success
    return response.data;
  } catch (error: any) {
    console.log('Send OTP Error:', error.message, error.response?.data); // Log error
    throw error;
  }
};

// Function to verify OTP
export const verifyOTP = async (
  phone: string,
  otp: string
): Promise<VerifyOTPResponse> => {
  const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
  const response = await axios.post<VerifyOTPResponse>(`${API_URL}/verify-otp`, {
    phone: formattedPhone,
    otp,
  });
  return response.data;
};

// Function to fetch protected data
export const fetchProtectedData = async (): Promise<ProtectedDataResponse> => {
  const { accessToken } = await getTokens();
  if (!accessToken) throw new Error('No access token found');

  const response = await axios.get<ProtectedDataResponse>(`${API_URL}/protected`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};




// import axios from 'axios';
// import {getTokens} from '../utils/auth';


// const API_URL = 'http://172.26.96.1:3000/api/auth'; //Swaraj's API endpoint

// export const sendOTP = async phone => {
//   const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
//   try {
//     const response = await axios.post(`${API_URL}/send-otp`, {
//       phone: formattedPhone,
//     });
//     console.log('Send OTP Success:', response.data); // Log success
//     return response.data;
//   } catch (error) {
//     console.log('Send OTP Error:', error.message, error.response?.data); // Log error
//     throw error;
//   }
// };

// export const verifyOTP = async (phone, otp) => {
//   const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
//   const response = await axios.post(`${API_URL}/verify-otp`, {
//     phone: formattedPhone,
//     otp,
//   });
//   return response.data;
// };

// export const fetchProtectedData = async () => {
//   const {accessToken} = await getTokens();
//   if (!accessToken) throw new Error('No access token found');

//   const response = await axios.get(`${API_URL}/protected`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   return response.data;
// };
