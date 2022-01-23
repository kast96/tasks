import React from 'react';
import { Link } from 'react-router-native';
import { CardType } from '../../types/types';

const CardItem: React.FC<CardType> = ({id, name, image}) => {
    return (
        <Link to={`/card/${id}`}>
            <div className="item">
                <div className="item__img">
                    <img src={image} alt={name} />
                </div>
                <div className="item__name">{name}</div>
            </div>
        </Link>
    )
}

export default CardItem