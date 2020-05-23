import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default  StyleSheet.create({
    container: {
        
    },

    img:{
        paddingTop: 30,
        height: 60,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    logout:{
        marginTop: 20,
        marginRight: 10
    },
    
    header: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 60,
        justifyContent: 'space-between',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 10.50,
        elevation: 2,
    },

    headerTextFeed: {
        fontSize: 25,
        paddingLeft: 25,
        fontWeight: 'bold',
        marginLeft: 20,
        
    },

    headerTextNew: {
        fontSize: 25,
        marginLeft: 30,
        paddingRight: 30,
        fontWeight: 'bold',
    },

    headerTextCar: {
        paddingRight: 50,
    },

    messenger:{
        alignItems: 'center',
        marginTop:250,
    },

    messengerText: {
        fontSize: 30,
        color: '#B6B6B6'
    }
});