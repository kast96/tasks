import React from 'react';
import { Link } from 'react-router-native';
import { CardType } from '../../types/types';

const CardDetail: React.FC<CardType> = ({id, name, image}) => {
    return (
        <div className="item">
            <Link to={`/`}><div>Назад</div></Link>
            <div className="item__img">
                <img src={image} alt={name} />
            </div>
            <div className="item__name">{name}</div>
        </div>
    )
}

export default CardDetail