import React from 'react';
import { Link } from 'react-router-native';
import { CardType } from '../../types/types';
import { Button } from '../common/Button/Button';

type PropsType = {
    item: CardType
    onPressSetDone: (id: number, done: boolean) => void
}

const CardDetail: React.FC<PropsType> = ({item, onPressSetDone}) => {
    return (
        <div className="item">
            <Link to={`/`}><div>Назад</div></Link>
            {item.image &&
                <div className="item__img">
                    <img src={item.image} alt={item.name} />
                </div>
            }
            <div className="item__name">{item.name}</div>
            {item.description &&
                <div className="item__description">{item.description}</div>
            }
            <div className="item__buttons">
                <Button onPress={onPressSetDone(item.id, true)} title={'Выполнено'} selected={item.done} />
                <Button onPress={onPressSetDone(item.id, false)} title={'Не выполнено'} selected={!item.done} />
            </div>
        </div>
    )
}

export default CardDetail