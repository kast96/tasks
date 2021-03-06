import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-native';
import { compose } from 'redux';
import { saveStorageActionCreator, setDetailActionCreator, setDoneActionCreator } from '../../redux/tasks-reducer';
import { getStateTaskDetail } from '../../redux/tasks-selectors';
import { AppStateType } from '../../redux/redux-store';
import { TaskType } from "../types/types";
import TaskDetail from './TaskDetail';

type MapStateToPropsType = {
	item: TaskType
}
  
type MapDispatchToPropsType = {
	setDetailActionCreator: (id: number) => void
	setDoneActionCreator: (id: number, done: boolean) => void
	saveStorageActionCreator: () => void
}

type OtherPropsType = {
	setTitle: Dispatch<SetStateAction<string>>
	setBackBtnPath:  Dispatch<SetStateAction<string | null>>
}
  
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OtherPropsType

const TaskDetailContainer: React.FC<PropsType> = ({item, setDetailActionCreator, setDoneActionCreator, saveStorageActionCreator, setTitle, setBackBtnPath}) => {
	const urlParams = useParams()
	const id = +urlParams.id
	
	useEffect(() => {
		if (id !== item.id) {
			setDetailActionCreator(id)
		}
	}, [id, item.id, setDetailActionCreator])

	useEffect(() => {
		setTitle(`Task ${id}`)
		setBackBtnPath('/')
	}, [setTitle, setBackBtnPath])
	
	let navigate = useNavigate()

	useEffect(() => {
		const backAction = () => {
			navigate('/')
			return true
		};

		const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

		return () => backHandler.remove()
	}, [])

	const onPressSetDone = (id: number, done: boolean) => () => {
		setDoneActionCreator(id, done);
		saveStorageActionCreator();
	}
	
	return (
		<TaskDetail item={item} onPressSetDone={onPressSetDone} />
	)
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		item: getStateTaskDetail(state)
	}
}

export default compose(
	connect<MapStateToPropsType, MapDispatchToPropsType, OtherPropsType, AppStateType>(mapStateToProps, {setDetailActionCreator, setDoneActionCreator, saveStorageActionCreator}),
)(TaskDetailContainer);