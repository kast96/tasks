import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setFilterActionCreator } from '../../redux/tasks-reducer';
import { getStateTasks, getStateFilter } from '../../redux/tasks-selectors';
import { AppStateType } from '../../redux/redux-store';
import { TaskType } from "../../types/types";
import Tasks from "./Tasks";

type MapStateToPropsType = {
    Tasks: Array<TaskType>
    filter: string | null
}
  
type MapDispatchToPropsType = {
    setFilterActionCreator: Dispatch<string | null>
}

type OtherPropsType = {
    setTitle: Dispatch<SetStateAction<string>>
    setBackBtnPath:  Dispatch<SetStateAction<string | null>>
}
  
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OtherPropsType

const TasksContainer: React.FC<PropsType> = ({tasks, filter, setTitle, setBackBtnPath, setFilterActionCreator}) => {
    useEffect(() => {
        setTitle(`Tasks`)
        setBackBtnPath(null)
    }, [setTitle, setBackBtnPath])
    
    return (
        <Tasks tasks={tasks} filter={filter} setFilterActionCreator={setFilterActionCreator} />
    )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        tasks: getStateTasks(state),
        filter: getStateFilter(state)
    }
  }

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OtherPropsType, AppStateType>(mapStateToProps, {setFilterActionCreator}),
)(TasksContainer);