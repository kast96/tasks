import { Dimensions, StatusBar, StyleSheet } from 'react-native';

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    width: '100%',
  },
  scrollView: {
    flex: 1,
    overflow: 'hidden',
    width: '100%',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default styles