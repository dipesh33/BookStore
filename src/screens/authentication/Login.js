import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../utility/Dimension';
import {Color, Font, Padding} from '../../utility/Theme';
// import {TextInput} from 'react-native-paper';
import ButtonSpinner from '../../component/ButtonSpinner';
import {AuthContext} from '../../navigation/AuthProvider';

export const Login = ({navigation}) => {
  const {login, googleLogin} = useContext(AuthContext);

  return (
    <View style={styles.screen}>
      <View style={styles.imageView}>
        <Image
          source={require('../../../assets/design.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textTitle}>
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.bottomText}>
          Use your credentials below and login
        </Text>
        <Text style={styles.bottomText}>to your account</Text>
        <View style={styles.input}>
          {/* <TextInput
              label="Email"
              style={styles.textInput}
              selectionColor={Color.HEADING}
              activeUnderlineColor={Color.HEADING}
            />
            <TextInput
              label="Password"
              secureTextEntry
              right={<TextInput.Icon name="eye" />}
              style={styles.textInput}
              selectionColor={Color.HEADING}
              activeUnderlineColor={Color.HEADING}
            /> */}
          <View style={styles.button}>
            <TouchableOpacity onPress={ () => googleLogin()}>
              {console.log(googleLogin())}
              <ButtonSpinner />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Signup')}>
              <Text>Don't have an account? Sign Up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: heightPercentageToDP('40%'),
    width: widthPercentageToDP('100%'),
  },
  text: {
    fontSize: 50,
    fontFamily: 'Lobster-Regular',
    color: Color.HEADING,
  },
  textTitle: {
    alignItems: 'center',
    height: heightPercentageToDP('20%'),
    padding: Padding.PRIMARY_PADDING,
  },
  bottomText: {
    fontSize: Font.PRIMARY,
  },
  input: {
    padding: Padding.PRIMARY_PADDING,
  },
  textInput: {
    width: widthPercentageToDP('70%'),
    backgroundColor: Color.PRIMARY,
    color: Color.HEADING,
  },
  button: {
    alignItems: 'center',
    paddingVertical: Padding.BUTTON_PADDING,
    padding: Padding.PRIMARY_PADDING,
  },
  googleButton: {
    borderColor: Color.HEADING,
    padding: Padding.PRIMARY_PADDING,
    elevation: 20,
  },
});
export default Login;
