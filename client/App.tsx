import { SafeAreaView, ScrollView, Text } from 'react-native';
import TasksContainer from "./src/components/Task/TasksContainer";
import TaskDetailContainer from "./src/components/Task/TaskDetailContainer";
import store, { AppStateType } from './src/redux/redux-store';
import { getTasks, loadStorageActionCreator, retrieveData } from './src/redux/tasks-reducer';
import { connect, Provider } from 'react-redux';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { useEffect, useState } from 'react';
import styles from './AppStyles';
import Header from "./src/components/Header/Header";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { getIsLoad, getIsResponceSuccess, getResponceErrorCode } from './src/redux/tasks-selectors';
import ErrorLine from './src/components/common/Errors/ErrorLine';

const AppRedux = ({isLoad, isResponceSuccess, responceErrorCode, loadStorageActionCreator, getTasks}) => {
  let [title, setTitle] = useState<string>('Loading...');
  let [backBtnPath, setBackBtnPath] = useState<string | null>(null);
  let [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
    'Nunito-ExtraBold': require('./src/assets/fonts/Nunito-ExtraBold.ttf'),
  });
  let [errorLineText, setErrorLineText] = useState<string>('');

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

  useEffect(() => {
    if (isLoad || isResponceSuccess) return
    setTitle('Ошибка')
  }, [isLoad, isResponceSuccess, getTasks, setTitle])

  useEffect(() => {
    let errorText = (responceErrorCode === 'ECONNABORTED') ? 'Нет подключения к серверу' : `Ошибка загрузки заданий (${responceErrorCode})`;
    setErrorLineText(errorText);
  }, [responceErrorCode, setErrorLineText])

  const onPressGetTasks = () => {
    setTitle('Loading...')
    getTasks();
  }
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeRouter>
        <SafeAreaView style={styles.container}>
          <Header title={title} backBtnPath={backBtnPath} />
          <ScrollView style={styles.scrollView}>
            {isLoad && <Text>Loading...</Text>}
            {!isLoad && !isResponceSuccess && <ErrorLine text={errorLineText} pressText={'Повторить'} onPress={onPressGetTasks}></ErrorLine>}
            {!isLoad && isResponceSuccess &&
              <Routes>
                {<Route path="/task/:id" element={<TaskDetailContainer setTitle={setTitle} setBackBtnPath={setBackBtnPath} />} />}
                <Route path="*" element={<TasksContainer setTitle={setTitle} setBackBtnPath={setBackBtnPath} />} />
              </Routes>
            }
          </ScrollView>
        </SafeAreaView>
      </NativeRouter>
    );
  }
}


type MapStateToPropsType = {
  isLoad: boolean,
  isResponceSuccess: boolean
  responceErrorCode: string
}
type MapDispatchToPropsType = {
  loadStorageActionCreator: (items: Array<number>) => void
  getTasks: () => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isLoad: getIsLoad(state),
  isResponceSuccess: getIsResponceSuccess(state),
  responceErrorCode: getResponceErrorCode(state)
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