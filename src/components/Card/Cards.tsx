import React from 'react';
import { View } from 'react-native';
import { CardType } from "../types/types";
import CardItem from './CardItem';

type PropsType = {
    cards: CardType
}

const Cards: React.FC<PropsType> = ({cards}) => {
    return (
        <View>
            {cards.map(item => <CardItem key={item.id} item={item} />)}
        </View>
    )
}

export default Cards