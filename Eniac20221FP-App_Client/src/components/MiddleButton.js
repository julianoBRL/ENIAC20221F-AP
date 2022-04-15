import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../assets/constants.json';

const pallet = colors.pallet1;

export default function MiddleButton({size,color,focused}) {
    return (
        <View style={styles.container}>
            <Icon name="home" size={size} color={focused? color: '#D6D6D6'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: pallet.background,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      borderColor: pallet.color1,
      borderWidth: 2
    },
});