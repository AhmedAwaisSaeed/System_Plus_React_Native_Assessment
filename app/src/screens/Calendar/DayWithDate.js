import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {purple, lightGrey, darkPurple} from '../../styles';

const DayWithDate = ({day, date}) => {
  const [today, setToday] = useState('07');
  return (
    <View style={today == date ? styles.todayStyle : styles.defaultStyle}>
      <Text
        style={
          today == date ? styles.selectedTextStyle : styles.DefaulttextStyle
        }>
        {day}
      </Text>
      <Text
        style={[
          today == date ? styles.selectedTextStyle : styles.DefaulttextStyle,
          {marginTop: today == date ? 3 : 15},
        ]}>
        {date}
      </Text>
    </View>
  );
};

export default DayWithDate;

const styles = StyleSheet.create({
  DefaulttextStyle: {
    color: lightGrey,
    fontSize: 15,
  },
  selectedTextStyle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  defaultStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  todayStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: darkPurple,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
