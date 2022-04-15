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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../assets/constants.json';

const pallet = colors.pallet1;

const Parse = require('parse/react-native.js');

const SettingsScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const data = [
    {
      key: "key1",
      title: "title1",
      descricao: "descricao1"
    },{
      key: "key2",
      title: "title2",
      descricao: "descricao2"
    },{
      key: "key3",
      title: "title3",
      descricao: "descricao3"
    },{
      key: "key4",
      title: "title4",
      descricao: "descricao4"
    },
  ]

  React.useEffect(() => {
    
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={pallet.background} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
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
  headerIcon: {
  }
});

export default SettingsScreen;
