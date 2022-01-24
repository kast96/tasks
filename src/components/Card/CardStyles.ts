import { Dimensions, StyleSheet } from 'react-native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = Math.round(dimensions.width * 9 / 16);

const styles = StyleSheet.create({
  safeAreaView: {
    width: '100%'
  },
  scrollView: {
    backgroundColor: 'pink',
    borderWidth: 5,
    borderColor: '#F00',
    overflow: 'hidden',
    width: '100%'
  },
});

export default styles