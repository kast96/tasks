import { Pressable, StyleSheet, Text, View } from 'react-native';
import base64url from 'base64url';
import { useState } from 'react';
import CardsContainer from "./src/components/Card/CardsContainer";
import CardDetailContainer from "./src/components/Card/CardDetailContainer";
import store from './src/redux/redux-store';
import { Provider } from 'react-redux';
import { NativeRouter, Route, Routes } from 'react-router-native';

export function Button(props) {
  const { onPress, title = '' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default function App() {
  let [diff, changeDiff] = useState('lite');

  let text = `diff: ${diff}`;
  let textBase64 = 'data:text/plain;base64,' + base64url(text);

  const onClick = (key, value) => {
    switch (key) {
      case 'diff':
        changeDiff(value);
        break;
    
      default:
        break;
    }
  }

  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Routes>
            {<Route path="/card/:id" element={<CardDetailContainer />} />}
            <Route path="*" element={<CardsContainer />} />
          </Routes>

          <View style={styles.fixToText}>
            <Button title="lite" onPress={onClick.bind(this, 'diff', 'lite')} />
            <Button title="medium" onPress={onClick.bind(this, 'diff', 'medium')} />
            <Button title="hard" onPress={onClick.bind(this, 'diff', 'hard')} />
          </View>
          <Text>{textBase64}</Text>
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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#f194ff',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
