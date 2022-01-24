import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  items: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 20,
    marginTop: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image_container: {
    width: 100,
    height: 100,
    marginRight: 20,
    backgroundColor: '#548FFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-ExtraBold',
    color: '#333',
  },
  status: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#f33',
  },
  status__done: {
    color: '#393',
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