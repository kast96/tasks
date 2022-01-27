import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from "./ButtonFilterStyles";

type PropsType = {
  onPress: any
  title: string
  selected?: boolean
  style?: any
}

export let ButtonFilter: React.FC<PropsType> = ({onPress, title = '', selected, style}) => {
    if (selected) {
      onPress = () => {};
    }
    
    return (
      <Pressable style={[styles.button, selected && styles.buttonSelected, style]} onPress={onPress}>
        <Text style={[styles.text, selected && styles.textSelected]}>{title}</Text>
      </Pressable>
    );
}