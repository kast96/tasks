import React from 'react';
import { Link } from 'react-router-native';
import { CardType } from '../../types/types';

type PropsType = {
    item: CardType
}

const CardItem: React.FC<PropsType> = ({item}) => {
    return (
        <Link to={`/card/${item.id}`}>
            <div className="item">
                <div className="item__img">
                    {item.image &&
                        <img src={item.image} alt={item.name} />
                    }
                </div>
                <div className="item__name">{item.name}</div>
                <div className="item__status">{item.done ? 'Выполнено' : 'Не выполнено'}</div>
            </div>
        </Link>
    )
}

export default CardItem