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
        color: '#4682B4'
    },

    headerTextCar: {
        paddingRight: 50,
    },

    item: {
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 10.50,
        elevation: 2,
    },

    itemText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },

    itemText1: {
        fontSize: 20,
        marginLeft: 20
    },
    foodValue: {
        marginTop: 10,
        fontSize: 20,
        color: '#4682B4'
    }
});