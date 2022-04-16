import { async } from 'parse/lib/browser/Storage';
import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import moment from 'moment';
import {colors} from '../assets/constants.json';

const pallet = colors.pallet1;

const Parse = require('parse/react-native.js');

let Denuncia = Parse.Object.extend("Denuncias");
const query = new Parse.Query(Denuncia);

const HomeScreen = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [denuncias, setDenuncias] = React.useState([])

  React.useEffect(() => {
    updateList();
    
    const intervalId = setInterval(() => {
      updateList()
    }, 5000)
  
    return () => clearInterval(intervalId); 

  }, [])

  const updateList = async () => {
    const user = await Parse.User.currentAsync();
    query.equalTo("by", user);
    query.exclude("by","updatedAt")
    query.descending("createdAt")
    
    query.find().then((result)=>{

      let dataHolder = [];

      result.forEach((data)=>{
        dataHolder.push({
          objectId: data.id,
          titulo: data.get("titulo"),
          createdAt: data.createdAt.toISOString(),
          descricao: data.get("descricao")
        })
      })

      setDenuncias(dataHolder)
      
    }).catch((error)=>console.log(error))
  }

  React.useEffect(() => {
    if (route.params?.newData) {
      console.log("new data, reload list")
    }
  }, [route.params?.newData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={pallet.background} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Denuncias</Text>
        <Pressable 
          style={styles.headerIconContainer}
          onPress={()=>{navigation.navigate("Add")}}
        >
          <Icon
            style={styles.headerIcon} 
            name='plus'
            size={30}
          />
        </Pressable>
      </View>

      <FlatList
        style={styles.cardList}
        data={denuncias}
        keyExtractor={item => item.objectId}
        extraData={denuncias}
        renderItem={({ item })=>{
          return(
            <View style={styles.cardContainer}>
              <Text style={styles.cardId}>{item.objectId}</Text>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardDatetime}>{ moment(item.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
            </View>
          )
        }}
      />

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

  cardList: {
    marginTop: 20,
    marginBottom: 20,
  }, 
  cardContainer: {
    borderColor: pallet.color1,
    borderWidth: 2,
    borderRadius: 15,


    margin: 10,
    marginTop: 5,
    padding: 10,
  }, 
  cardId: {
    fontSize: 9,
    color: "gray"
  },
  cardTitle: {
    marginTop: 5,
    marginBottom: 5
  }, 
  cardDatetime: {
    fontSize: 10,
    color: "gray"
  },
});

export default HomeScreen;
