import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-native';
import { compose } from 'redux';
import { setDetailActionCreator, setDoneActionCreator } from '../../redux/cards-reducer';
import { getStateCardDetail } from '../../redux/cards-selectors';
import { AppStateType } from '../../redux/redux-store';
import { CardType } from "../types/types";
import CardDetail from './CardDetail';

type MapStateToPropsType = {
    item: CardType
}
  
type MapDispatchToPropsType = {
    setDetailActionCreator: (id: number) => void
    setDoneActionCreator: (id: number, done: boolean) => void
}
  
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const CardDetailContainer: React.FC<PropsType> = ({item, setDetailActionCreator, setDoneActionCreator}) => {
    const urlParams = useParams()
    const id = +urlParams.id
    
    useEffect(() => {
        if (id !== item.id) {
            setDetailActionCreator(id)
        }
    }, [id, item.id, setDetailActionCreator])

    const onPressSetDone = (id: number, done: boolean) => () => {
        setDoneActionCreator(id, done);
    }
    
    return (
        <CardDetail item={item} onPressSetDone={onPressSetDone} />
    )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        item: getStateCardDetail(state)
    }
}

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setDetailActionCreator, setDoneActionCreator}),
)(CardDetailContainer);