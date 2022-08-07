import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    },
    emptyText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5
    },
    infoText: {
        fontSize: 20,
        margin: 5
    },
    addButtonContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        padding: 30,
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        paddingHorizontal: 35,
        borderRadius: 35
    },
    buttonText: {
        fontSize: 20,
        color: "white"
    },
    searchInput: {
        marginVertical: 10,
        padding: 10,
    }
});