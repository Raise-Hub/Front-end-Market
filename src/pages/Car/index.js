import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';


import styles from './styles';

export default function Login() {
    const navigation = useNavigation();

    function navigateToNews() {
        navigation.navigate('News');
    }

    function navigateToLogin() {
        navigation.navigate('Login');
    }


    function navigateToCar() {
        navigation.navigate('Car');
    }

    function navigateToFeed() {
        navigation.navigate('Feed');
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.img}>
            <Image style={styles.img} source={logoImg} />

            <View style={styles.logout}>
                <TouchableOpacity
                onPress={navigateToLogin}
                >
                    <Feather name="log-out" size={30} color="#000" />
                </TouchableOpacity>
            </View>
            
            </View>

            <View style={styles.header}>
                <TouchableOpacity
                onPress={navigateToFeed}
                >
                    <Text style={styles.headerTextFeed}>
                        Feed
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity 
                onPress={navigateToNews}
                >
                    <Text style={styles.headerTextNew}>
                        Novidades
                    </Text>

                </TouchableOpacity>
                
                <TouchableOpacity 
                onPress={navigateToCar}
                >
                     <Text style={styles.headerTextCar}>
                        <Feather name="shopping-cart" size={30} color="#4682B4" />
                    </Text>
                
                </TouchableOpacity>

            </View>

            <View style={styles.messenger}>
                <Text style={styles.messengerText}>
                    Nenhum item adicionado!
                </Text>
            </View>
        </View>
    );
}