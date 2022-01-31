import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from "./ButtonStyles";

type PropsType = {
  onPress: any
  title: string
  selected?: boolean
  style?: any
  theme?: 'green' | 'red'
}

export let Button: React.FC<PropsType> = ({onPress, title = '', selected, style, theme}) => {
    if (selected) {
      onPress = () => {};
    }
    let themeStyles = null;
    if (theme == 'green') {
      themeStyles = [styles.buttonGreen]
      if (selected) themeStyles.push(styles.buttonGreenSelected)
    }
    if (theme == 'red') {
      themeStyles = [styles.buttonRed]
      if (selected) themeStyles.push(styles.buttonRedSelected)
    }
    if (!theme) {
      themeStyles = [styles.buttonDefault]
      if (selected) themeStyles.push(styles.buttonDefaultSelected)
    }
    
    return (
      <Pressable style={[styles.button, themeStyles, theme && themeStyles, style]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
}