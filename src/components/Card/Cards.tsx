import React from 'react';
import { View } from 'react-native';
import { CardType } from "../../types/types";
import CardItem from './CardItem';
import styles from "./CardsStyles";

type PropsType = {
    cards: Array<CardType>
}

const Cards: React.FC<PropsType> = ({cards}) => {
    return (
        <View style={styles.items}>
            {cards.map(item => <CardItem key={item.id} item={item} />)}
        </View>
    )
}

export default Cards