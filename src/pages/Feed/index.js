import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

import logoImg from '../../assets/logo.png';
import xsalada from '../../images/xsalada.png';

export default function Feed() {
    const navigation = useNavigation();

    function navigateToNews() {
        navigation.navigate('News');
    }

    function navigateToLogin() {
        navigation.navigate('Login');
    }


    function navigateToDetail() {
        navigation.navigate('Detail');
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
                        <Feather name="shopping-cart" size={30} color="#000" />
                    </Text>
                
                </TouchableOpacity>

            </View>

            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                keyExtractor={products => String(products)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.products}>

                        <TouchableOpacity
                            style={styles.row}
                            onPress={navigateToDetail}
                        >
                            <Image style={styles.imgfood1} source={xsalada} />
                                <Text style={styles.imgFoodText}>
                                    {`X-salada \nAlface, tomate, hamburguer 180g \n100% Bovino, com molho da casa.`}
                                </Text>
                                <View style={styles.foodTextValue}>
                                <Text style={styles.foodValue}>
                                    R$10,00
                                </Text>
                                </View>
                    
                        </TouchableOpacity>
                        

                    </View>
                    
                )}
            />

            


            

        </View>
    );
}