import React from 'react';
import {
  SafeAreaView,
  ToastAndroid,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable
} from 'react-native';

import {colors} from '../assets/constants.json';

const pallet = colors.pallet1;

const Parse = require('parse/react-native.js');

const AddScreen = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [data, setData] = React.useState({
    title: '',
    descricao: ''
  });

  const addDenuncia = async (title, descricao) =>{
    const user = await Parse.User.currentAsync();
    const Denuncia = Parse.Object.extend("Denuncias");
    const denuncia = new Denuncia();
    denuncia.set("titulo", title);
    denuncia.set("descricao", descricao);
    denuncia.set("by", user);
    let data = await denuncia.save();
    if(data){
      ToastAndroid.showWithGravityAndOffset(
        "Criado com sucesso!!",
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50
      );
      setData({
        title: '',
        descricao: ''
      })
      navigation.goBack();
    }else{
      ToastAndroid.showWithGravityAndOffset(
        "Error ao criar!!",
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50
      );
    }
  }
  
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={pallet.background} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add denuncia</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.inputField} 
          onChangeText={(text)=>{setData({...data,title: text})}}
          value={data.title}
          placeholder="Title"
        />

        <TextInput
          style={[styles.inputField]} 
          onChangeText={(text)=>{setData({...data,descricao: text})}}
          value={data.descricao}
          multiline={true}
          numberOfLines={4}
          placeholder="Description"
        />

        <Pressable
          style={styles.signinButton}
          onPress={()=>{addDenuncia(data.title,data.descricao)}}
        >
          <Text style={styles.signinButtonText}>Save</Text>
        </Pressable>
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
  },

  content:{
    margin: 20
  },

  inputField: {
    borderColor: pallet.color2,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    padding: 10
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
});

export default AddScreen;
