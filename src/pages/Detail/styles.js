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
        justifyContent: 'space-between',
    },

    logout:{
        marginTop: 20,
        marginRight: 10,
    },

    header:{
        marginTop: 40,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.50,
        shadowRadius: 10.50,
        elevation: 5,
        alignItems: 'center'
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },

    item: {
        marginTop: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.50,
        shadowRadius: 10.50,
        elevation: 5,
        alignItems: 'center'
    },

    imgItem: {
        borderRadius: 20
    },

    itemText: {
        fontSize: 30,
        fontStyle: 'italic',
        marginTop: 20
    },
    itemText1: {
        fontSize: 20,
        fontStyle: 'italic',
        marginTop: 20,
        marginLeft: 15
    },

    back: {
        marginTop: 80,
    },

    foodValue: {
        marginTop: 10,
        fontSize: 20,
        color: '#4682B4'
    }


});