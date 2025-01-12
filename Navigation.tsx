// In App.js in a new project

import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import TransactionDetails from './screens/TransactionDetails';
import {ItemProps} from './screens/Home';

import useStore from './global/zustand';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  TransactionDetails: ItemProps;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const {isLoggedIn} = useStore((state: any) => state);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="TransactionDetails"
            component={TransactionDetails}
          />
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
