import React from 'react';
import { Text, View } from 'react-native';
import { styles } from "./ErrorLineStyles";

type PropsType = {
  text: string
  pressText?: string
  onPress?: any
}

let ErrorLine: React.FC<PropsType> = ({onPress, text = '', pressText}) => {
    return (
      <View style={styles.line}>
        <Text style={styles.text}>{text}</Text>
        {pressText && onPress && <Text style={[styles.text, styles.dot]}>-</Text>}
        {pressText && onPress && <Text style={[styles.text, styles.link]} onPress={onPress}>{pressText}</Text>}
      </View>
    );
}

export default ErrorLine