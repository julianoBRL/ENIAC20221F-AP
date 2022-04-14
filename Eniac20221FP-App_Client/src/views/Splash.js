import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const Parse = require('parse/react-native.js');

const SplashScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  React.useEffect(async () => {

    /*
    mudar para isso
    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await MyAPI.getData(someId);
        // ...
      }
      fetchData();
    }, [someId]); // Or [] if effect doesn't need props or state
    
    */
    let configs = await Parse.Config.get();
    console.log(configs)

    const currentUser = Parse.User.current();
    if (currentUser) {
      console.log("User connected!!!")
      navigation.navigate('Home')
    } else {
      console.log("User not connected!!!")
      navigation.navigate('Login')
    }

  },[])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white}}>
          <Text>hello Splash</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
});

export default SplashScreen;
