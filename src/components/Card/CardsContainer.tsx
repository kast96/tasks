import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { CardType } from "../types/types";
import Cards from "./Cards";

type MapStateToPropsType = {
    cards: Array<CardType>
}
  
type MapDispatchToPropsType = {}
  
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const CardsContainer: React.FC<PropsType> = ({cards}) => {
    return (
        <Cards cards={cards} />
    )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
      cards: state.cards.cards
    }
  }

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {}),
)(CardsContainer);