import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Login'); 
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.content}>
      <Image source={require("../assets/topimg.png")} style={styles.image} />
      <View style={styles.hellocontainer}>
        <Text style={styles.hellotext}>Welcome</Text>
      </View>
      <View>
        <Text style={styles.signintext}>Create a new account</Text>
      </View>
      <View style={styles.usernamecontainer}>
        <Entypo name="user" size={20} color="black" style={styles.usericon} />
        <TextInput
          style={styles.usernametext}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.passwordcontainer}>
        <Entypo name="lock" size={20} color="black" style={styles.usericon} />
        <TextInput
          style={styles.usernametext}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.passwordcontainer}>
        <Fontisto name="locked" size={20} color="black" style={styles.usericon} />
        <TextInput
          style={styles.usernametext}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>
      <View style={styles.signcontainer}>
        <TouchableOpacity onPress={handleSignup}>
          <LinearGradient
            colors={['#8A2BE2', '#FF1493']}
            style={styles.gradientIconContainer}
            start={[0, 0]}
            end={[1, 1]}
          >
            <Text style={styles.signtext}>Sign up</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.donthaveacccountainer}>
        <Text style={styles.donthaveacctext}>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('Login')} style={{ textDecorationLine: 'underline', color: 'darkblue', fontWeight: 'bold' }}>
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  content: {
    marginTop: 0,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 0,
  },
  hellocontainer: {
    marginTop: 20,
  },
  hellotext: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  signintext: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '530',
    marginBottom: 20,
    marginTop: 7,
  },
  usernamecontainer: {
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    borderRadius: 50,
    marginHorizontal: 50,
    marginVertical: 20,
    elevation: 10,
    height: 50,
    alignItems: 'center',
  },
  usernametext: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    height: '100%',
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  usericon: {
    marginLeft: 20,
  },
  passwordcontainer: {
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    borderRadius: 50,
    marginHorizontal: 50,
    marginVertical: 20,
    elevation: 10,
    height: 50,
    alignItems: 'center',
  },
  signcontainer: {
    marginTop: 70,
    marginHorizontal: 50,
  },
  signtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  gradientIconContainer: {
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donthaveacccountainer: {
    marginTop: 120,
    alignSelf: 'center',
  },
  donthaveacctext: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
    alignSelf: 'center',
  },
});


