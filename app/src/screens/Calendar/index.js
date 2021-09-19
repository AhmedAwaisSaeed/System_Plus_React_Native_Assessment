import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View, FlatList,StatusBar} from 'react-native';
import {RadioButton, Card} from 'react-native-paper';
import {red, orange, purple, green, darkPurple} from '../../styles';
import DayWithDate from './DayWithDate';

import Header from '../../components/Header';
import DaysList from './DaysList';

export const Calendar = ({route}) => {
  const [daysData, setDaysData] = useState([
    {
      id: 1,
      dayName: 'Wednesday',
      date: '07 August 2021',
      cardsData: [
        {
          id: 1,
          location: '5519 NE Skidmore Portland',
          avatar: '',
          name: 'Rick Adams',
          status: 'Approved',
          time: '8 AM',
          duration: '30 mins',
        },
        {
          id: 2,
          location: '5519 NE Skidmore Portland',
          avatar: '',
          name: 'Rick Adams',
          status: 'Pending',
          time: '9 AM',
          duration: '60 mins',
        },
      ],
    },
    {
      id: 2,
      dayName: 'Thursday',
      date: '08 August 2021',
      cardsData: [
        {
          id: 1,
          location: '5519 NE Skidmore Portland',
          avatar: '',
          name: 'Rick Adams',
          status: 'Buyer Reschedule',
          time: '8 AM',
          duration: '30 mins',
        },
      ],
    },
  ]);



  const renderItem = ({item}) => {
    return (
     <DaysList item={item}></DaysList>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle={'dark-content'}></StatusBar>
      <Header title={route?.name}></Header>
      <View style={styles.calendarContainer}>
        <View style={styles.monthContainer}>
          <Text style={styles.purpleText}>Aug</Text>
        </View>
        <DayWithDate day="Sun" date="11"></DayWithDate>
        <DayWithDate day="Mon" date="05"></DayWithDate>
        <DayWithDate day="Tue" date="06"></DayWithDate>
        <DayWithDate day="Wed" date="07"></DayWithDate>
        <DayWithDate day="Thu" date="08"></DayWithDate>
        <DayWithDate day="Fri" date="09"></DayWithDate>
        <DayWithDate day="Sat" date="10"></DayWithDate>
      </View>
      
        <FlatList
          data={daysData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={true}
          contentContainerStyle={{minHeight:'100%'}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  purpleText: {
    color: purple,
    fontSize: 16,
    fontWeight: '600',
  },
  calendarContainer: {
    // flex:0.15,
    backgroundColor: '#F6F8FA',
    flexDirection: 'row',
  },
  monthContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
