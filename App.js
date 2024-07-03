import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/login';
import Signin from './src/screens/signin';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <><NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Welcome' }} />
      <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ title: 'Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer><View style={styles.container}>
        <Text></Text>
        <StatusBar style="auto" />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
