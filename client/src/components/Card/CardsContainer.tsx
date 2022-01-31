import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setFilterActionCreator } from '../../redux/cards-reducer';
import { getStateCards, getStateFilter } from '../../redux/cards-selectors';
import { AppStateType } from '../../redux/redux-store';
import { CardType } from "../../types/types";
import Cards from "./Cards";

type MapStateToPropsType = {
    cards: Array<CardType>
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

const CardsContainer: React.FC<PropsType> = ({cards, filter, setTitle, setBackBtnPath, setFilterActionCreator}) => {
    useEffect(() => {
        setTitle(`Tasks`)
        setBackBtnPath(null)
    }, [setTitle, setBackBtnPath])
    
    return (
        <Cards cards={cards} filter={filter} setFilterActionCreator={setFilterActionCreator} />
    )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
      cards: getStateCards(state),
      filter: getStateFilter(state)
    }
  }

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OtherPropsType, AppStateType>(mapStateToProps, {setFilterActionCreator}),
)(CardsContainer);