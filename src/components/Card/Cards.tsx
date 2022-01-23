import React from 'react';
import { CardType } from "../types/types";
import CardItem from './CardItem';

type PropsType = {
    cards: CardType
}

const Cards: React.FC<PropsType> = ({cards}) => {
    return (
        <div className="items">
            {cards.map(item => <CardItem key={item.id} id={item.id} name={item.name} image={item.image} />)}
        </div>
    )
}

export default Cards