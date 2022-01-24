import { Dimensions, StyleSheet } from 'react-native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = Math.round(dimensions.width * 9 / 16);

const styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: imageHeight,
  },
});

export default styles