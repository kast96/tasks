import React from 'react';
import { Image, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { CardType } from '../../types/types';
import styles from "./CardItemStyles";

type PropsType = {
    item: CardType
}

const CardItem: React.FC<PropsType> = ({item}) => {
    return (
        <Link to={`/card/${item.id}`}>
            <View>
                <View>
                    {item.image &&
                        <Image source={item.image} style={styles.image} />
                    }
                </View>
                <Text>{item.name}</Text>
                <Text>{item.done ? 'Выполнено' : 'Не выполнено'}</Text>
            </View>
        </Link>
    )
}

export default CardItem