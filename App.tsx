import { StyleSheet, View } from 'react-native';
import CardsContainer from "./src/components/Card/CardsContainer";
import CardDetailContainer from "./src/components/Card/CardDetailContainer";
import store, { AppStateType } from './src/redux/redux-store';
import { loadStorageActionCreator, retrieveData } from './src/redux/cards-reducer';
import { connect, Provider } from 'react-redux';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { useEffect } from 'react';

const AppRedux = ({loadStorageActionCreator}) => {
  useEffect(() => {
    retrieveData('doneID').then((result) => {
      if (typeof(result) !== 'string') return;
      let items = JSON.parse(result);
      if (items instanceof Array) {
        loadStorageActionCreator(items);
      }
    });
  }, [retrieveData, loadStorageActionCreator]);
  
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          {<Route path="/card/:id" element={<CardDetailContainer />} />}
          <Route path="*" element={<CardsContainer />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}


type MapStateToPropsType = {}
type MapDispatchToPropsType = {
  loadStorageActionCreator: () => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
});
const AppContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {loadStorageActionCreator})(AppRedux);


const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
