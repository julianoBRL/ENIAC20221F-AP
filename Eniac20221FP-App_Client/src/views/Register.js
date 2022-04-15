import React from 'react';
import { 
  View, 
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  Pressable
} from 'react-native';

import {colors} from '../assets/constants.json';
import AuthContext from '../components/AuthContext';

const pallet = colors.pallet1;

const SignInScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    email: ''
  });

  const { signUp } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={pallet.background} barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wellcome!</Text>
        <Text style={styles.headerSubtitle}>Wellcome back you've been missed.</Text>
      </View>

      <TextInput
        style={styles.inputField}
        onChangeText={(text)=>{setData({...data,username: text})}}
        value={data.username}
        placeholder="Username"
      />
      <TextInput
        style={styles.inputField} 
        onChangeText={(text)=>{setData({...data,password: text})}}
        value={data.password}
        secureTextEntry={true}
        placeholder="Password"
      />
      <TextInput
        style={styles.inputField} 
        onChangeText={(text)=>{setData({...data,email: text})}}
        value={data.email}
        placeholder="Email"
      />
      <Pressable
        style={styles.signinButton}
        onPress={()=>{signUp(data.username,data.password,data.email)}}
      >
        <Text style={styles.signinButtonText}>Sign up</Text>
      </Pressable>


      <View style={styles.registerContainer}>
        <Text style={styles.registerLabel}>Already a member? </Text>
        <Pressable
          onPress={()=>{
            navigation.navigate("Login")
          }}
        >
          <Text style={styles.registerAction}>Sign in</Text>
        </Pressable>
      </View>


    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: pallet.background,
    padding: 40
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20
  },
  headerSubtitle: {
    marginBottom: 35
  },

  inputField: {
    borderColor: pallet.color2,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  },
  recpassword: {
    color: pallet.color2,
    fontSize: 12,
    alignSelf: 'flex-end'
  },

  signinButton: {

    borderRadius: 15,

    backgroundColor: pallet.color2,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
      
    marginTop: 30,
    marginBottom: 20,
  },
  signinButtonText:{
    fontWeight: 'bold',
    fontSize: 15,
  },

  orContinue: {
    alignSelf: 'center'
  },
  orContinueTitle: {},
  otherSigninContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  otherSigninIconContainer: {
    margin: 10,
    marginTop: 20,
    marginBottom: 20
  },

  registerContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  registerLabel: {},
  registerAction: {
    color: pallet.color2,
  }
});