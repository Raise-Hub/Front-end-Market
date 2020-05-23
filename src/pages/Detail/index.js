import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

import xsalada from '../../images/item.png';
import logoImg from '../../assets/logo.png';

export default function Detail() {
    const navigation = useNavigation();

    function navigateToFeed() {
        navigation.navigate('Feed');
    }

    function navigateToLogin() {
        navigation.navigate('Login');
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

                <Text style={styles.headerText}>Detalhes do Produto</Text>

            </View>

            <View style={styles.item}>

                <Image style={styles.imgItem} source={xsalada} />

                <Text style={styles.itemText}>
                    X - Salada
                </Text>

                <Text style={styles.itemText1}>
                    Alface, tomate, picles, hamburguer 180g 100% Bovino, assado na grelha ao molho da casa, acompaha mini porção de fritas e maionese no tempero da casa.
                </Text>
                <View style={styles.foodTextValue}>
                 <Text style={styles.foodValue}>
                    R$10,00
                 </Text>
                </View>
            </View>

            <View style={styles.back}>

                <TouchableOpacity
                onPress={navigateToFeed}
                >
                    <Feather name="arrow-left" size={30} color="#000" />
            
                </TouchableOpacity>

            </View>

        </View>
    );
}