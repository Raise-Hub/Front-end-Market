import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default  StyleSheet.create({
    container: {
        
    },
    img: {
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 70,
        justifyContent: "space-between",
        marginLeft: 125,
        marginBottom: 50,
        marginTop: 100,
        

    },

    header: {
        flexDirection: 'column',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10,
        
    },
    
    headerText: {
        paddingTop: 25,
        fontSize: 25,
        fontWeight: 'bold'
    },

    email: {
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.50,
        shadowRadius: 10.50,
        elevation: 5,
        marginTop: 50
    },

    password: {
        marginTop: 20,
        justifyContent: "space-between",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.50,
        shadowRadius: 10.50,
        elevation: 5
    },

    buttom: {
        
        marginTop: 30,
        justifyContent: "space-between",
        
    },

    detailButton: {
        marginTop: 20
    },

    detailButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#4682B4",
        marginLeft: 10
    }
});