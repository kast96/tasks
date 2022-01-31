import { SafeAreaView, ScrollView, Text } from 'react-native';
import CardsContainer from "./src/components/Card/CardsContainer";
import CardDetailContainer from "./src/components/Card/CardDetailContainer";
import store, { AppStateType } from './src/redux/redux-store';
import { getTasks, loadStorageActionCreator, retrieveData } from './src/redux/cards-reducer';
import { connect, Provider } from 'react-redux';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { useEffect, useState } from 'react';
import styles from './AppStyles';
import Header from "./src/components/Header/Header";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { getIsLoad } from './src/redux/cards-selectors';

const AppRedux = ({isLoad, loadStorageActionCreator, getTasks}) => {
  let [title, setTitle] = useState<string>('Loading...');
  let [backBtnPath, setBackBtnPath] = useState<string | null>(null);
  let [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
    'Nunito-ExtraBold': require('./src/assets/fonts/Nunito-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (isLoad) return;
    retrieveData('doneID').then((result) => {
      if (typeof(result) !== 'string') return
      let items = JSON.parse(result)
      if (items instanceof Array) {
        loadStorageActionCreator(items)
      }
    });
  }, [isLoad, retrieveData, loadStorageActionCreator])

  useEffect(() => {
    getTasks()
  }, [getTasks])
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeRouter>
        <SafeAreaView style={styles.container}>
          <Header title={title} backBtnPath={backBtnPath} />
          <ScrollView style={styles.scrollView}>
            {isLoad && <Text>Loading...</Text>}
            {!isLoad &&
              <Routes>
                {<Route path="/card/:id" element={<CardDetailContainer setTitle={setTitle} setBackBtnPath={setBackBtnPath} />} />}
                <Route path="*" element={<CardsContainer setTitle={setTitle} setBackBtnPath={setBackBtnPath} />} />
              </Routes>
            }
          </ScrollView>
        </SafeAreaView>
      </NativeRouter>
    );
  }
}


type MapStateToPropsType = {
  isLoad: boolean
}
type MapDispatchToPropsType = {
  loadStorageActionCreator: (items: Array<number>) => void
  getTasks: () => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isLoad: getIsLoad(state)
});
const AppContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {loadStorageActionCreator, getTasks})(AppRedux);


const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;