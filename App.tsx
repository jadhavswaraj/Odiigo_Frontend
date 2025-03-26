import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { checkTokenValidity } from './src/utils/auth';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn: boolean = await checkTokenValidity();
        setIsLoggedIn(loggedIn);
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setIsLoading(false);
        SplashScreen.hide(); // Ensure it runs even if there's an error
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
};

export default App;


// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/AppNavigator';
// import { checkTokenValidity } from './src/utils/auth';
// // import SplashScreen from 'react-native-splash-screen';

// const App: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       setIsLoading(true);
//       const loggedIn: boolean = await checkTokenValidity();
//       setIsLoggedIn(loggedIn);
//       setIsLoading(false);
//     };
//     checkLoginStatus();
//   }, []);

//   if (isLoading) {
//     // You could add a splash screen or loading indicator here
//     return null;
//   }

//   return (
//     <NavigationContainer>
//       <AppNavigator isLoggedIn={isLoggedIn} />
//     </NavigationContainer>
//   );
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/AppNavigator';
// import { checkTokenValidity } from './src/utils/auth';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       setIsLoading(true);
//       const loggedIn = await checkTokenValidity();
//       setIsLoggedIn(loggedIn);
//       setIsLoading(false);
//     };
//     checkLoginStatus();
//   }, []);

//   if (isLoading) {
//     // You could add a splash screen or loading indicator here
//     return null;
//   }

//   return (
//     <NavigationContainer>
//       <AppNavigator isLoggedIn={isLoggedIn} />
//     </NavigationContainer>
//   );
// };

// export default App;
