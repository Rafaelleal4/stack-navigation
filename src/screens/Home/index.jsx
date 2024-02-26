import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import styles from './styles';


const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Contato')}
            >
                <Text style={styles.text}>Go to Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Perfil')}
            >
                <Text style={styles.text}>Go to Profile</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Home