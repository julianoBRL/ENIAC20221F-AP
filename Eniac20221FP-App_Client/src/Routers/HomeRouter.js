import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/Home';
import SettingsScreen from '../views/Settings';
import ProfileScreen from '../views/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MiddleButton from "../components/MiddleButton";
import {colors} from '../assets/constants.json';
import AddScreen from '../views/Add';

const pallet = colors.pallet1;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeNavigator(){
  return (
    <Stack.Navigator initialRouteName="Home3" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home3" component={HomeScreen} />
      <Stack.Screen name="Add" component={AddScreen} />
    </Stack.Navigator>
  );
}

export default function HomeRouter() {
  return (
      <Tab.Navigator 
        initialRouteName='Home2'
        screenOptions={{ 
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            elevation: 0,
            backgroundColor: pallet.background,
            borderRadius: 100,
            height: 50,
            borderTopColor: pallet.color1,
            borderTopWidth: 2,
          },
          tabBarActiveTintColor: pallet.color2
        }}
      >

        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarIcon: ({size,color}) => (
              <Icon name="account" size={size} color={color} />
            )
          }}
        />

        <Tab.Screen 
          name="Home2" 
          component={HomeNavigator}
          options={{
            tabBarIcon: ({focused,size,color}) => (
              <MiddleButton size={size} color={color} focused={focused}/>
            ),
            tabBarLabel: '',
            headerShown: false
          }}
        />

        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            tabBarIcon: ({size,color}) => (
              <Icon name="cog" size={size} color={color} />
            )
          }}
        />

      </Tab.Navigator>
  );
}