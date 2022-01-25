import { Dimensions, StyleSheet } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  detail: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    padding: 10,
    paddingBottom: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 20,
    marginTop: 10,
    overflow: 'hidden'
  },
  image: {
    resizeMode: "contain",
    width: window.width - 60,
    height: (window.width - 60) * 0.8,
    borderRadius: 12,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-ExtraBold',
    color: '#333',
    textAlign: 'center',
  },
  status: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#f33',
    textAlign: 'center',
    marginBottom: 20,
  },
  status__done: {
    color: '#393',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#333',
    marginBottom: 20,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonDone: {
    marginRight: 10
  },
  accent: {
    position: 'absolute',
    top: -25,
    right: -42,
    fontSize: 14,
    fontFamily: 'Nunito-ExtraBold',
    backgroundColor: '#548FFF',
    width: 80,
    height: 50,
    transform: [{
      rotate: '60deg',
    }]
  }
});

export default styles