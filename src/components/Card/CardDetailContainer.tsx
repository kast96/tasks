import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { CardType } from "../types/types";
import CardDetail from './CardDetail';

type MapStateToPropsType = {
    detailItem: CardType
}
  
type MapDispatchToPropsType = {}
  
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const CardDetailContainer: React.FC<PropsType> = ({detailItem}) => {  
    return (
        <CardDetail id={detailItem.id} name={detailItem.name} image={detailItem.image} />
    )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        detailItem: state.cards.cards[state.cards.detail]
    }
  }

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {}),
)(CardDetailContainer);