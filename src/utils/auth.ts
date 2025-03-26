import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const EXPIRY_KEY = 'token_expiry';

// ✅ Store tokens with expiry (15 days)
export const storeToken = async (accessToken: string, refreshToken: string): Promise<void> => {
  try {
    const expiry: number = Date.now() + 15 * 24 * 60 * 60 * 1000; // 15 days
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    await AsyncStorage.setItem(EXPIRY_KEY, expiry.toString());
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

// ✅ Check if token is valid based on expiry
export const checkTokenValidity = async (): Promise<boolean> => {
  try {
    const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    const expiry = await AsyncStorage.getItem(EXPIRY_KEY);

    if (!accessToken || !expiry) return false; // Token doesn't exist

    if (Date.now() >= parseInt(expiry, 10)) {
      await removeToken(); // Token expired, remove it
      return false;
    }

    return true; // Token is valid
  } catch (error) {
    console.error('Error checking token:', error);
    return false;
  }
};

// ✅ Retrieve stored tokens
export const getTokens = async (): Promise<{ accessToken: string | null; refreshToken: string | null }> => {
  try {
    const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
    return { accessToken, refreshToken };
  } catch (error) {
    console.error('Error getting tokens:', error);
    return { accessToken: null, refreshToken: null };
  }
};


// ✅ Remove tokens on logout
export const removeToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
    await AsyncStorage.removeItem(EXPIRY_KEY);
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ACCESS_TOKEN_KEY = 'access_token';
// const REFRESH_TOKEN_KEY = 'refresh_token';
// const EXPIRY_KEY = 'token_expiry';

// // Store tokens with 15-day expiration
// export const storeToken = async (accessToken: string, refreshToken: string): Promise<void> => {
//   const expiry: number = Date.now() + 15 * 24 * 60 * 60 * 1000; // 15 days in milliseconds
//   await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
//   await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
//   await AsyncStorage.setItem(EXPIRY_KEY, expiry.toString());
// };

// // Check if refresh token is valid (not expired)
// export const checkTokenValidity = async (): Promise<boolean> => {
//   const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
//   const expiry = await AsyncStorage.getItem(EXPIRY_KEY);

//   if (!refreshToken || !expiry) return false;
//   return Date.now() < parseInt(expiry, 10);
// };

// // Get tokens
// export const getTokens = async (): Promise<{ accessToken: string | null; refreshToken: string | null }> => {
//   const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
//   const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
//   return { accessToken, refreshToken };
// };

// // Remove tokens on logout
// export const removeToken = async (): Promise<void> => {
//   await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
//   await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
//   await AsyncStorage.removeItem(EXPIRY_KEY);
// };




// 
// 
// 
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const ACCESS_TOKEN_KEY = 'access_token';
// const REFRESH_TOKEN_KEY = 'refresh_token';
// const EXPIRY_KEY = 'token_expiry';


// ---------------------------------------Previous
// Store tokens with 15-day expiration
// export const storeToken = async (accessToken: string, refreshToken: string): Promise<void> => {
//   const expiry: number = Date.now() + 15 * 24 * 60 * 60 * 1000; // 15 days in milliseconds
//   await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
//   await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
//   await AsyncStorage.setItem(EXPIRY_KEY, expiry.toString());
// };


// Check if refresh token is valid (not expired)
// export const checkTokenValidity = async (): Promise<boolean> => {
//   const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
//   const expiry = await AsyncStorage.getItem(EXPIRY_KEY);

//   if (!refreshToken || !expiry) return false;
//   return Date.now() < parseInt(expiry, 10);
// };

// export const removeToken = async () => {
//   try {
//     await AsyncStorage.removeItem('accessToken');
//     await AsyncStorage.removeItem('refreshToken');
//   } catch (error) {
//     console.error('Error removing token:', error);
//   }
// };


// export const removeToken = async () => {
//   try {
//     await AsyncStorage.removeItem('accessToken');
//     await AsyncStorage.removeItem('refreshToken');
//   } catch (error) {
//     console.error('Error removing token:', error);
//   }
// };

// export const removeToken = async () => {
//   try {
//     await AsyncStorage.removeItem('accessToken');
//     await AsyncStorage.removeItem('refreshToken');
//   } catch (error) {
//     console.error('Error removing token:', error);
//   }
// };

// ------------------------------------------New--------------------------

// export const checkTokenValidity = async (): Promise<boolean> => {
//   try {
//     const token = await AsyncStorage.getItem('accessToken');

//     return token !== null; // ✅ If token exists, user is logged in
//   } catch (error) {
//     console.error('Error checking token:', error);
//     return false;
//   }
// };

// export const storeToken = async (accessToken: string, refreshToken: string) => {
//   try {
//     const expiry: number = Date.now() + 15 * 24 * 60 * 60 * 1000;
//     await AsyncStorage.setItem('accessToken', accessToken);
//     await AsyncStorage.setItem('refreshToken', refreshToken);
//     await AsyncStorage.setItem(EXPIRY_KEY, expiry.toString());
//   } catch (error) {
//     console.error('Error storing token:', error);
//   }
// };


// // Get tokens
// export const getTokens = async (): Promise<{ accessToken: string | null; refreshToken: string | null }> => {
//   const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
//   const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
//   return { accessToken, refreshToken };
// };

// // Remove tokens on logout
// export const removeToken = async (): Promise<void> => {
//   await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
//   await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
//   await AsyncStorage.removeItem(EXPIRY_KEY);
// };



