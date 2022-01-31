import React, { Dispatch, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { CardType } from "../../types/types";
import { ButtonFilter } from '../common/Button/ButtonFilter';
import CardItem from './CardItem';
import styles from "./CardsStyles";

type PropsType = {
    cards: Array<CardType>
    filter: string | null
    setFilterActionCreator: Dispatch<string | null>
}

const Cards: React.FC<PropsType> = ({cards, filter, setFilterActionCreator}) => {
    let onFilter = (value: string | null) => () => {
        setFilterActionCreator(value);
    }

    let filterCards = cards.filter(item => {
        switch (filter) {
            case 'done':
                return item.done === true

            case 'not-done':
                 return item.done !== true
        
            default:
                return true
        }
    })

    return (
        <View>
            <SafeAreaView>
                <ScrollView horizontal={true}>
                    <View style={styles.filter}>
                        <ButtonFilter title={'Все'} onPress={onFilter(null)} selected={filter === null}></ButtonFilter>
                        <ButtonFilter title={'Не выпоненные'} onPress={onFilter('not-done')} selected={filter === 'not-done'}></ButtonFilter>
                        <ButtonFilter title={'Выпоненные'} onPress={onFilter('done')} selected={filter === 'done'}></ButtonFilter>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <View style={styles.items}>
                {filterCards.map(item => <CardItem key={item.id} item={item} />)}
            </View>
        </View>
    )
}

export default Cards