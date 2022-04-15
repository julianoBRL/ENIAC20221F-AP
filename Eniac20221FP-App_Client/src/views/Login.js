import React from 'react';
import { 
  View, 
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  Pressable
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../assets/constants.json';

import AuthContext from '../components/AuthContext';

const pallet = colors.pallet1;

const SignInScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    username: '',
    password: ''
  });

  const { signIn } = React.useContext(AuthContext);

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
        <Text style={styles.recpassword}>Forgot password</Text>
        <Pressable
          style={styles.signinButton}
          onPress={()=>{signIn(data.username,data.password)}}
        >
          <Text style={styles.signinButtonText}>Sign in</Text>
        </Pressable>

        <View style={styles.orContinue}>
          <Text style={styles.orContinueTitle}>Or continue with</Text>
        </View>

        <View style={styles.otherSigninContainer}>

          <Pressable style={styles.otherSigninIconContainer}>
            <Icon 
              name='github'
              size={40}
              color={pallet.white}
            />
          </Pressable>

          <Pressable style={styles.otherSigninIconContainer}>
            <Icon 
              name='facebook'
              size={40}
              color={pallet.white}
            />
          </Pressable>

          <Pressable 
            style={styles.otherSigninIconContainer}
          >
            <Icon 
              name='google'
              size={40}
              color={pallet.white}
            />
          </Pressable>
          
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerLabel}>Not a member? </Text>
          <Pressable
            onPress={()=>{
              navigation.navigate("Register")
            }}
          >
            <Text style={styles.registerAction}>Register now</Text>
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