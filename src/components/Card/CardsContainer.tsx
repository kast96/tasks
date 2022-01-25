import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getStateCards } from '../../redux/cards-selectors';
import { AppStateType } from '../../redux/redux-store';
import { CardType } from "../../types/types";
import Cards from "./Cards";

type MapStateToPropsType = {
    cards: Array<CardType>
}
  
type MapDispatchToPropsType = {}

type OtherPropsType = {
    setTitle: Dispatch<SetStateAction<string>>
    setBackBtnPath:  Dispatch<SetStateAction<string | null>>
}
  
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OtherPropsType

const CardsContainer: React.FC<PropsType> = ({cards, setTitle, setBackBtnPath}) => {
    useEffect(() => {
        setTitle(`Tasks`)
        setBackBtnPath(null)
    }, [setTitle, setBackBtnPath])
    
    return (
        <Cards cards={cards} />
    )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
      cards: getStateCards(state)
    }
  }

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OtherPropsType, AppStateType>(mapStateToProps, {}),
)(CardsContainer);