import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './src/Pages/signup';
import Passcode from './src/Pages/passcode';
import BottomTabs from './src/Components/BottomTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="signup">
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="passcode" component={Passcode} />
        <Stack.Screen name="bottomTab" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
