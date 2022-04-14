import AsyncStorage from '@react-native-async-storage/async-storage';
const Parse = require('parse/react-native.js');

export default function configureParseServer() {
    
    Parse.javaScriptKey = "jskey"
    Parse.applicationId = "parse"
    Parse.serverURL = 'http://192.168.0.103:1337/parse'
    Parse.liveQueryServerURL = 'ws://192.168.0.103:1337'
    Parse.setAsyncStorage(AsyncStorage);

    const Message = Parse.Object.extend("Message");
    const message = new Message();

    message.set("message", "Hello fomr react native");

    message.save().then((message) => {
        console.log(message)
    }, (error) => {
        console.log(error)
    });

    Parse.initialize("parse", "jskey");

}