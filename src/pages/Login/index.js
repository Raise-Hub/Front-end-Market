import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from 'react-native-elements';

import logoImg from '../../assets/logo.png';


import styles from './styles';

export default function Login() {
    const navigation = useNavigation();
   
   function navigateToFeed() {
       navigation.navigate('Feed');
   } 


    function navigateToCadastro() {
        navigation.navigate('Cadastro');
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                
                <Image style={styles.img} source={logoImg} />
                 
            </View>
        
            <View style={styles.email}>
                <Input
                    placeholder='E-mail'
                />

            </View>
            <View style={styles.password}>
               <Input 
                    placeholder="Password" 
                    secureTextEntry={true} 
            />

            </View>

            <View style={styles.buttom}>
                <Button
                    title="Entrar"
                    type="clear"
                    onPress={navigateToFeed}
                    
                />

            </View>

            <TouchableOpacity
                style={styles.detailButton}
                onPress={navigateToCadastro}
                >
                    <Text style={styles.detailButtonText}>Cadastre-se</Text>
                </TouchableOpacity>

        </View>
        

    );
}