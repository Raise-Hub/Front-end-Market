import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import item from '../../images/item.png';


import styles from './styles';

export default function News() {
    const navigation = useNavigation();

    function navigateToFeed() {
        navigation.navigate('Feed');
    }

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    function navigateToNews() {
        navigation.navigate('News');
    }

    function navigateToCar() {
        navigation.navigate('Car');
    }

    

    return (
        <View style={styles.container}>
            
            <View style={styles.img}>
                <Image style={styles.img} source={logoImg} />

                <TouchableOpacity
                onPress={navigateToLogin}
                >
                    <Feather name="log-out" size={30} color="#000" />
                </TouchableOpacity>

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
                        <Feather name="shopping-cart" size={30} color="#000" />
                    </Text>
                
                </TouchableOpacity>

            </View>

            <View style={styles.item}>
                <Image style={styles.imgItem} source={item} />
                <Text style={styles.itemText}>
                    X - Picanha
                </Text>
                <Text style={styles.itemText1}>
                    180g de Picaha suina grelhada, Queijo, presunto, picles, Pão de brioche, maionese temperada a moda da casa, mostarda e ketchup.
                </Text>
                <View style={styles.foodTextValue}>
                 <Text style={styles.foodValue}>
                    R$15,00
                 </Text>
                </View>
            </View>
        </View>
    );
}