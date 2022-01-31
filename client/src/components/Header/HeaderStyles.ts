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
    paddingRight: 148,
  },
  back: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    backgroundColor: '#EAF1FF',
    margin: 10,
    marginLeft: 20,
    borderRadius: 16
  },
  back__svg: {
    width: 24,
    height: 24,
    color: '#548FFF',
  }
});

export default styles