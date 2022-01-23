import { Pressable, StyleSheet, Text } from 'react-native';

export function Button({onPress, title = '', selected}) {
    if (selected) {
      onPress = () => {};
    }
    return (
      <Pressable style={selected ? buttonSelectedStyle : styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#cd8383',
    },
    buttonSelected: {
      backgroundColor: '#bd2828',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

const buttonSelectedStyle = StyleSheet.flatten([
  styles.button,
  styles.buttonSelected
]);