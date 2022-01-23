import React from 'react';
import { Image, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { CardType } from '../../types/types';
import { Button } from '../common/Button/Button';

type PropsType = {
    item: CardType
    onPressSetDone: (id: number, done: boolean) => void
}

const CardDetail: React.FC<PropsType> = ({item, onPressSetDone}) => {
    return (
        <View>
            <Link to={`/`}><Text>Назад</Text></Link>
            {/*item.image &&
                <View>
                    <Image source={require(item.image)} />
                </View>
            */}
            <Text>{item.name}</Text>
            {item.description &&
                <Text>{item.description}</Text>
            }
            <View>
                <Button onPress={onPressSetDone(item.id, true)} title={'Выполнено'} selected={item.done} />
                <Button onPress={onPressSetDone(item.id, false)} title={'Не выполнено'} selected={!item.done} />
            </View>
        </View>
    )
}

export default CardDetail