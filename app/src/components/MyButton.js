import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const MyButton = ({text, color, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={[styles.buttonTextStyle, {color: color}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 10,
    borderRadius: 100,
    paddingHorizontal:8,
    paddingVertical: 5,
    backgroundColor: '#fff',
    // height:,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    // width:'50%'
  },
  buttonTextStyle: {
    fontSize: 15,
    fontWeight: '600',
  },
});
