import React, { Dispatch, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { TaskType } from "../../types/types";
import { ButtonFilter } from '../common/Button/ButtonFilter';
import TaskItem from './TaskItem';
import styles from "./TasksStyles";

type PropsType = {
    tasks: Array<TaskType>
    filter: string | null
    setFilterActionCreator: Dispatch<string | null>
}

const Tasks: React.FC<PropsType> = ({tasks, filter, setFilterActionCreator}) => {
    let onFilter = (value: string | null) => () => {
        setFilterActionCreator(value);
    }

    let filterTasks = tasks.filter(item => {
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
                {filterTasks.map(item => <TaskItem key={item.id} item={item} />)}
            </View>
        </View>
    )
}

export default Tasks