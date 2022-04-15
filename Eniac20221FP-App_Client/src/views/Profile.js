import React, { BackHandler } from 'react';
import {
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthContext from '../components/AuthContext';
import {colors} from '../assets/constants.json';
import Parse from 'parse/react-native.js';

const pallet = colors.pallet1;


const ProfileScreen = () => {
  const isDarkMode = useColorScheme() === 'dark'; 
  const { signOut } = React.useContext(AuthContext);
  const userdata = Parse.User.current();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={pallet.background} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <Pressable 
          style={styles.headerIconContainer}
          onPress={()=>{signOut()}}
        >
          <Icon
            style={styles.headerIcon} 
            name='logout'
            size={30}
          />
        </Pressable>
      </View>

      <View style={styles.userdataContainer}> 
        <Image
          style={styles.profilePicture}
          source={{
            uri: userdata.get("profilePicture").url(),
          }}
        />
        <View style={styles.userdata}>
          <Text style={styles.userdataTitle}>Username: </Text>
          <Text style={styles.userdataValue}>{userdata.getUsername()}</Text>
        </View>
        <View style={styles.userdata}>
          <Text style={styles.userdataTitle}>Email: </Text>
          <Text style={styles.userdataValue}>{userdata.getEmail()}</Text>
        </View>
        <View style={styles.userdata}>
          <Text style={styles.userdataTitle}>Member since: </Text>
          <Text style={styles.userdataValue}>{userdata.createdAt.toISOString()}</Text>
        </View>
        <View style={styles.userdata}>
          <Text style={styles.userdataTitle}>Unique ID: </Text>
          <Text style={styles.userdataValue}>{userdata.id}</Text>
        </View>
      </View>

    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: pallet.background,
    paddingTop: 20,
    paddingBottom: 40
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: pallet.color1,
    borderBottomWidth: 2,
    borderRadius: 100,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerIconContainer: {
    borderColor: pallet.color1,
    borderWidth: 2,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  headerIcon: {},


  userdataContainer: {
    margin: 40,
    alignItems: 'center'
  }, 
  profilePicture: {
    width: 150,
    height: 150,
    marginBottom: 40,
    borderRadius: 180,
    borderColor: pallet.color2,
    borderWidth: 3
  }, 
  userdata: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
  userdataTitle: {
    fontWeight: 'bold'
  }, 
  userdataValue: {},
});

export default ProfileScreen;
