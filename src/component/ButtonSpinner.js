import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
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
        <Text style={styles.submitSpinnerText}>Log into your account</Text>
        {submitSpinner ? (
          <ActivityIndicator
            style={{marginLeft: 10}}
            color={Color.SECONDARY}
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
    backgroundColor: Color.BUTTON,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  submitSpinnerText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
  },
});
