import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingBottom: 35
    },
    headerTitle: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: 'bold'
    },
    inputFieldContainer: {
        margin: 10
    },
    addButtonContainer: {
        backgroundColor: 'transparent',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButton: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        padding: 10,
        paddingHorizontal: 50,
        borderRadius: 12
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
});
