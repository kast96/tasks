import React from 'react';
import { Image, Text, View } from 'react-native';
import { CardType } from '../../types/types';
import { Button } from '../common/Button/Button';
import styles from "./CardDetailStyles";

type PropsType = {
    item: CardType
    onPressSetDone: (id: number, done: boolean) => void
}

const CardDetail: React.FC<PropsType> = ({item, onPressSetDone}) => {
    return (
        <View style={styles.detail}>
            {item.image &&
                <Image source={{uri: item.image}} style={styles.image} />
            }
            <Text style={styles.title}>{item.name}</Text>
            <Text style={[styles.status, item.done && styles.status__done]}>{item.done ? 'Выполнено' : 'Не выполнено'}</Text>
            {item.description &&
                <Text style={styles.description}>{item.description}</Text>
            }
            <View style={styles.buttons}>
                <Button theme={'green'} style={styles.buttonDone} onPress={onPressSetDone(item.id, true)} title={'Выполнено'} selected={item.done} />
                <Button theme={'red'} onPress={onPressSetDone(item.id, false)} title={'Не выполнено'} selected={!item.done} />
            </View>
            <View style={styles.accent}></View>
        </View>
    )
}

export default CardDetail