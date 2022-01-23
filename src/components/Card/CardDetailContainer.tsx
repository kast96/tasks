import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-native';
import { compose } from 'redux';
import { setDetailActionCreator } from '../../redux/cards-reducer';
import { getStateCardDetail } from '../../redux/cards-selectors';
import { AppStateType } from '../../redux/redux-store';
import { CardType } from "../types/types";
import CardDetail from './CardDetail';

type MapStateToPropsType = {
    detailItem: CardType
}
  
type MapDispatchToPropsType = {
    setDetailActionCreator: (id: number) => void
}
  
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const CardDetailContainer: React.FC<PropsType> = ({detailItem, setDetailActionCreator}) => {
    const urlParams = useParams()
    const id = +urlParams.id
    useEffect(() => {
        if (id !== detailItem.id) {
            setDetailActionCreator(id)
        }
    }, [id, detailItem.id, setDetailActionCreator])
    
    return (
        <CardDetail id={detailItem.id} name={detailItem.name} image={detailItem.image} />
    )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        detailItem: getStateCardDetail(state)
    }
  }

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setDetailActionCreator}),
)(CardDetailContainer);