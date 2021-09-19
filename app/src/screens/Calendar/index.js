import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {RadioButton, Card} from 'react-native-paper';
import {red, orange, purple, green, darkPurple} from '../../styles';
import DayWithDate from './DayWithDate';
import DayHeader from './DayHeader';
import RadioButtonColumn from './RadioButtonColumn';
import TimeColumn from './TimeColumn';
import CardColumn from './CardColumn';
import Header from '../../components/Header';

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

  useCallback(status => {
    callback;
  }, []);

  const checkStatus = status => {
    if (status == 'Approved') {
      return green;
    } else if (status == 'Pending') {
      return orange;
    } else if (status == 'Buyer Reschedule') {
      return purple;
    }
  };

  const renderItem = ({item}) => {
    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <View style={{flex: 1, marginHorizontal: 15}}>
        <DayHeader dayName={item.dayName} date={item.date}></DayHeader>
        {item.cardsData.map((data, index, array) => {
          return (
            <View key={data.id} style={{flexDirection: 'row'}}>
              <RadioButtonColumn
                checkStatus={checkStatus}
                status={data?.status}
                index={index}
                array={array}
              />
              <TimeColumn time={data?.time} duration={data?.duration} />
              <CardColumn
                name={data?.name}
                status={data?.status}
                location={data?.location}
                checkStatus={checkStatus}
              />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
      <View style={{flex: 1}}>
        <FlatList
          data={daysData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // extraData={selectedId}
        />
      </View>
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
    backgroundColor: '#F6F8FA',
    flexDirection: 'row',
  },
  monthContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
