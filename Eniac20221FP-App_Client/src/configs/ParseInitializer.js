import AsyncStorage from '@react-native-async-storage/async-storage';
const Parse = require('parse/react-native.js');

export default function configureParseServer() {
    
    Parse.javaScriptKey = "jskey"
    Parse.applicationId = "parse"
    Parse.serverURL = 'http://192.168.0.103:1337/parse'
    Parse.liveQueryServerURL = 'ws://192.168.0.103:1337'
    Parse.setAsyncStorage(AsyncStorage);
    Parse.initialize("parse", "jskey");

}