import { StyleSheet, Text, View,Image, TextInput  } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/topimg.png")} style={styles.image} />
        <View style={styles.hellocontainer}>
          <Text style={styles.hellotext}>Welcome</Text>
        </View>
        <View>
          <Text style={styles.signintext}>Sign in to your account</Text>
        </View>
        <View style={styles.usernamecontainer}>
        <Entypo name="user" size={24} color="black" style={styles.usericon} />
        <TextInput style={styles.usernametext}/>
        </View>
      </View>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1
  },
  image: {
    width: "100%",
    height: 200,
  },
  hellocontainer:{
   
  },
  hellotext:{
    textAlign:"center",
    fontSize:50,
    fontWeight:"bold"
  },
  signintext:{
    textAlign:"center",
    fontSize:18,
    fontWeight:"500",
  },
  usernamecontainer:{},
  usernametext:{}
})