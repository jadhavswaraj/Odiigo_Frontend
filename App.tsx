import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { checkTokenValidity } from './src/utils/auth';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      setIsLoading(true);
      const loggedIn: boolean = await checkTokenValidity();
      setIsLoggedIn(loggedIn);
      setIsLoading(false);
    };
    checkLoginStatus();
  }, []);

  if (isLoading) {
    // You could add a splash screen or loading indicator here
    return null;
  }

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
