import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {red, orange, purple, green, darkPurple, grey} from '../../styles';

const DayHeader = ({dayName, date}) => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 20}}>
      <Text style={styles.dayNameStyle}>{dayName}</Text>
      <Text style={styles.dateStyle}>{date}</Text>
    </View>
  );
};

export default DayHeader;

const styles = StyleSheet.create({
  dayNameStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  dateStyle: {
    marginLeft: 5,
    fontSize: 18,
    // fontWeight:"800",
    color: '#707070',
    marginTop: 2,
  },
});
