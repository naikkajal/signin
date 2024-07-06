import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('Login');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.content}>
      <Image source={require("../assets/topimg.png")} style={styles.image} />
      <Text style={styles.signup}>Create Account</Text>
      <Text style={styles.getstarted}>Just a few quick things to get started</Text>
      <View style={styles.usernamecontainer}>
        <Entypo name="user" size={20} color="black" style={styles.usericon} />
        <TextInput
          style={styles.usernametext}
          placeholder='Username'
          placeholderTextColor={"#888"}
        />
      </View>
      <View style={styles.emailcontainer}>
        <Fontisto name="email" size={24} color="black" style={styles.emailicon} />
        <TextInput
          style={styles.emailtext}
          placeholder='Email'
          placeholderTextColor={"#888"}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.mobilecontainer}>
        <Entypo name="mobile" size={24} color="black" style={styles.usericon} />
        <TextInput
          style={styles.mobiletext}
          placeholder='Mobile No.'
          placeholderTextColor={"#888"}
        />
      </View>
      <View style={styles.passwordcontainer}>
        <Entypo name="lock" size={20} color="black" style={styles.usericon} />
        <TextInput
          style={styles.passwordtext}
          placeholder='Password'
          placeholderTextColor={"#888"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.passwordcontainer}>
        <Fontisto name="locked" size={20} color="black" style={styles.usericon} />
        <TextInput
          style={styles.passwordtext}
          placeholder='Confirm Password'
          placeholderTextColor={"#888"}
          secureTextEntry
        />
      </View>
      <View style={styles.createcontainer}>
        <TouchableOpacity onPress={handleSignup} style={styles.signinButton}>
          <LinearGradient
            colors={['#8A2BE2', '#FF1493']}
            style={styles.gradientButton}
            start={[0, 0]}
            end={[1, 1]}
          >
            <Text style={styles.signinText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.alhaveacccountainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.alhaveacctext}>
            Already have an account? <Text style={{ textDecorationLine: "underline", color: "darkblue", fontWeight: "bold" }}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: "120%",
    height: "20%",
  },
  signup: {
    fontSize: 31,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 40,
  },
  getstarted: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "500",
    fontSize: 17,
  },
  usernamecontainer: {
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    borderRadius: 50,
    marginHorizontal: 50,
    marginTop: 30,
    elevation: 10,
    height: 50,
    alignItems: "center",
  },
  usernametext: { 
    textAlign: "center", 
    flex: 1 
  },
  emailcontainer: {
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    borderRadius: 50,
    marginHorizontal: 50,
    marginTop: 30,
    elevation: 10,
    height: 50,
    alignItems: "center",
  },
  usericon: {
    marginHorizontal: 20,
  },
  emailicon: { 
    marginHorizontal: 20 
  },
  emailtext: {
    textAlign: "center",
    flex: 1,
  },
  mobilecontainer: {
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    borderRadius: 50,
    marginHorizontal: 50,
    marginTop: 30,
    elevation: 10,
    height: 50,
    alignItems: "center",
  },
  mobiletext: { 
    textAlign: "center", 
    flex: 1 
  },
  passwordcontainer: {
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    borderRadius: 50,
    marginHorizontal: 50,
    marginTop: 32,
    marginBottom: 20,
    elevation: 10,
    height: 50,
    alignItems: "center",
  },
  passwordtext: { 
    textAlign: "center", 
    flex: 1 
  },
  createcontainer: {
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    borderRadius: 50,
    marginHorizontal: 50,
    marginTop: 30,
    elevation: 10,
    height: 50,
    alignItems: "center",
  },
  signinButton: {
    flex: 1,
    borderRadius: 50,
  },
  gradientButton: {
    flex: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  signinText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  alhaveacccountainer: {
    marginTop: 75,
    alignSelf: 'center',
  },
  alhaveacctext: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "300",
    alignSelf: 'center',
  },
});



