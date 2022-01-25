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
		<Link to={`/card/${item.id}`} style={styles.item} underlayColor="white">
			<View style={styles.content}>
				<View style={styles.image_container}>
					{item.image &&
						<Image source={item.image} style={styles.image} />
					}
				</View>
				<View style={styles.container}>
					<Text style={styles.title}>{item.name}</Text>
					<Text style={[styles.status, item.done && styles.status__done]}>{item.done ? 'Выполнено' : 'Не выполнено'}</Text>
				</View>
				<View style={styles.accent}></View>
			</View>
		</Link>
	)
}

export default CardItem