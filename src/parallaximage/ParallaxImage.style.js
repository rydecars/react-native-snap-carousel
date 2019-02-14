import { StyleSheet } from 'react-native';
//test
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
  loaderContainer: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
