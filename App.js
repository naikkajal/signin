import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Alert from './src/screens/alert';
import { initializeApp } from '@firebase/app';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const Stack = createNativeStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyAWa7zmyIvVJNxIwIhQROU2aknKgb7leAo",
  authDomain: "neighborhoodwatch-84814.firebaseapp.com",
  projectId: "neighborhoodwatch-84814",
  storageBucket: "neighborhoodwatch-84814.appspot.com",
  messagingSenderId: "684377049952",
  appId: "1:684377049952:web:d8a7530f15cf9d7bef2c05",
  measurementId: "G-NCSYDTHT0Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name="Alert" component={Alert} options={{ title: 'Welcome' }} />
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} options={{ title: 'Welcome' }} />
              <Stack.Screen name="Signup" component={Signup} options={{ title: 'Welcome' }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

