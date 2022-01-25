import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 16,
        elevation: 3,
        backgroundColor: '#548FFF',
        borderColor: '#548FFF',
        borderWidth: 3
    },
    buttonDefault: {
      backgroundColor: '#548FFF',
      borderColor: '#548FFF',
    },
    buttonDefaultSelected: {
      borderColor: '#346FDF',
    },
    buttonGreen: {
      backgroundColor: '#44a544',
      borderColor: '#44a544',
    },
    buttonGreenSelected: {
      borderColor: '#0e670e',
    },
    buttonRed: {
      backgroundColor: '#ef3636',
      borderColor: '#ef3636',
    },
    buttonRedSelected: {
      borderColor: '#9b0000',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});