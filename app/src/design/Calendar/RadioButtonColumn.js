import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {red, orange, purple, green, darkPurple, grey} from '../../styles';
import {RadioButton, Card} from 'react-native-paper';

const RadioButtonColumn = ({index, array, status, checkStatus}) => {
  return (
    <View style={styles.radioContainer}>
      <RadioButton
        value="first"
        status={'checked'}
        color={checkStatus(status)}
      />
      {index != array.length - 1 && <View style={styles.lineStyle}></View>}
    </View>
  );
};

export default RadioButtonColumn;

const styles = StyleSheet.create({
  radioContainer: {
    flex: 0.15,
    // backgroundColor:'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineStyle: {
    backgroundColor: grey,
    width: 2,
    height: '90%',
    position: 'absolute',
    top: '55%',
  },
});
