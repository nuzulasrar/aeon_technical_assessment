// In App.js in a new project

import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screens/Login';
import Home from './screens/Home';

import useStore from './global/zustand';

const Stack = createNativeStackNavigator();

function RootStack() {
  const {isLoggedIn} = useStore((state: any) => state);
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return <RootStack />;
}
