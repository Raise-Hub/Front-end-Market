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
        color: '#4682B4'
        
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

    row: {
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 10.50,
        elevation: 2,
    },

    imgfood1: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    imgFoodText:{
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10,
        
    },

    foodValue: {
        marginTop: 100,
        fontSize: 15,
        color: '#4682B4'
    }
});