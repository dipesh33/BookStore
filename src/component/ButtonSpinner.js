import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Color } from '../utility/Theme';

const ButtonSpinner = () => {
  const [submitSpinner, setSubmitSpinner] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.ButtonWithSpinner}
        onPress={() => {
          if (true) {
            setSubmitSpinner(!submitSpinner);
          }
        }}>
          <Image source={require('../../assets/google.png')}
          style={{...styles.imageIconStyle}}/>
        <Text style={styles.submitSpinnerText}>Continue with Google</Text>
        {submitSpinner ? (
          <ActivityIndicator
            style={{marginLeft: 10}}
            color={Color.BUTTON}
            size="small"
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSpinner;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonWithSpinner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
    elevation: 15,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  submitSpinnerText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#0D0D0D',
    marginRight: 15,
  },
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
 
});
