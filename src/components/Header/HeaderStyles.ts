import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Nunito-ExtraBold',
    color: '#333',
    textAlign: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  title__back: {
    paddingRight: 128,
  },
  back: {
    textAlign: 'center',
    width: 64,
    height: 64,
    fontSize: 32,
    fontFamily: 'Nunito-ExtraBold',
    color: '#333',
    borderColor: '#eee',
    paddingTop: 8,
  }
});

export default styles