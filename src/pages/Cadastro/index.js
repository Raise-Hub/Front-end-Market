import React from 'react';
import { Input, Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png';


export default function Cadastro() {
    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.img} source={logoImg} />
                 
            </View>

            <View style={styles.cadastro}>
                <Text style={styles.cadastroText}>
                    Cadastre-se!
                </Text>

            </View>
            

            <View style={styles.email}>
                <Input
                    placeholder='E-mail'
                />

            </View>

            <View style={styles.password}>
                <Input
                    placeholder='Password'
                />

            </View>

            <View style={styles.name}>
                <Input
                    placeholder='Nome'
                />

            </View>

            <View style={styles.phone}>
                <Input
                    placeholder='Telefone'
                />

            </View>

            <View style={styles.address}>
                <Input
                    placeholder='Endereço'
                />

               
            </View>

            <View style={styles.uf}>
                <Input
                    placeholder='UF'
                    style={{ width: 80 }}
                />

            </View>

            <View style={styles.buttom}>
            <Button
                    title="Finalizar"
                    type="clear"
                    onPress={navigateToLogin}
                />

            </View>

                <TouchableOpacity 
                    style={styles.detailArrow}
                    onPress={navigateToLogin}
                    >
                        <Feather name='arrow-left' size={25} color="#4682B4" />
                    </TouchableOpacity>
            

        </View>
    );
}