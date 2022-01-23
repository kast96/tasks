import { StyleSheet, View } from 'react-native';
import CardsContainer from "./src/components/Card/CardsContainer";
import CardDetailContainer from "./src/components/Card/CardDetailContainer";
import store from './src/redux/redux-store';
import { Provider } from 'react-redux';
import { NativeRouter, Route, Routes } from 'react-router-native';

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Routes>
            {<Route path="/card/:id" element={<CardDetailContainer />} />}
            <Route path="*" element={<CardsContainer />} />
          </Routes>
        </View>
      </NativeRouter>
    </Provider>
  );
}

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
