import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      paddingBottom: 50
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 75,
      marginBottom: 16
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 275
    },
    backgroundView: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '50%',
      width: '100%'
    },
    backgroundImage: {
      flex: 1
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    age: {
      fontSize: 18
    },
    row: {
      margin: 15
    },
    rowTitle: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    rowValue: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  });
  