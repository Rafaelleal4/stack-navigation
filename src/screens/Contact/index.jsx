import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import styles from './styles';

export default function Contact() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.text}>Go to Home</Text>
            </TouchableOpacity>
    </View>
  )
}
