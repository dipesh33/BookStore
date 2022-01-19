import React, {Component} from 'react';
import {Text, View, StyleSheet, LogBox} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../utility/Dimension';
import { Font } from '../../utility/Theme';

export class SplashScreen extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={styles.screen}>
        <LottieView
          source={require('../../../assets/book.json')}
          autoPlay
          loop = {false}
          style={styles.icon}
          onAnimationFinish={() => (
              this.props.navigation.replace('Login')
          )}
        />
        <View style={styles.heading}>
          <Text style={styles.textHeading}>Book {'\n'}Store</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9F7E8',
  },
  icon: {
    height: heightPercentageToDP('50%'),
    width: widthPercentageToDP('50%'),
    position: 'relative',
  },
  heading:{
      alignItems: 'center',

  },
  textHeading: {
      fontSize: Font.HEADING,
      fontFamily: 'MochiyPopPOne-Regular',
      color: '#61BFAD',
  },
});

export default SplashScreen;
