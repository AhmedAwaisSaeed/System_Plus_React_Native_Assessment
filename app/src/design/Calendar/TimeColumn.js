import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TimeColumn = ({time, duration}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeStyle}>{time}</Text>
      <Text style={styles.durationStyle}>({duration})</Text>
    </View>
  );
};

export default TimeColumn;

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeStyle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#707070',
  },
  durationStyle: {
    marginLeft: 5,
    fontSize: 14,
    // fontWeight:"800",
    color: '#707070',
  },
});
