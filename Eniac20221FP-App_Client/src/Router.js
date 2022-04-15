import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './views/Login';
import RegisterScreen from './views/Register';
import SplashScreen from './views/Splash';
import configureParseServer from './configs/ParseInitializer';
import HomeRouter from './Routers/HomeRouter';
import AuthContext from './components/AuthContext';

configureParseServer();

const Parse = require('parse/react-native.js');

const Stack = createNativeStackNavigator();

const App = () => {

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            isSignedin: true,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            isSignedin: true,
            isLoading: false,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            isSignedin: false,
            isLoading: false
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      isSignedin: false,
    }
  );

  React.useEffect(() => {

    const startupFechtData = async () => {
      if (Parse.User.currentAsync()) {
        console.log("logado!")
        dispatch({ type: 'SIGN_IN'});
      } else {
        dispatch({ type: 'SIGN_OUT' })
      }
    };
    startupFechtData();
  },[])
  

  const authContext = React.useMemo(
    () => ({
      signIn: async (username,password) => {
        await Parse.User.logIn(username, password);
        if (Parse.User.currentAsync()) {
          dispatch({ type: 'SIGN_IN'});
        } else {
          dispatch({ type: 'SIGN_OUT' })
        }
      },
      signOut: async () => {
        await Parse.User.logOut()
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async (username,password,email) => {
        const user = new Parse.User();
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);

        await user.signUp();
        await Parse.User.logIn(username, password);
        if (Parse.User.currentAsync()) {
          dispatch({ type: 'SIGN_IN'});
        } else {
          dispatch({ type: 'SIGN_OUT' })
        }
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          {state.isLoading ? (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Splash" component={SplashScreen} />
            </Stack.Navigator>
          ) : !state.isSignedin ? (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  title: 'Sign in',
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />

              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                  title: 'Sign in',
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
            
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={HomeRouter} />
            </Stack.Navigator>
          )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;


/*

        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeRouter} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>


*/