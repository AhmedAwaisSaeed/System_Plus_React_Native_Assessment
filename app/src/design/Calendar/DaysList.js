import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DayHeader from './DayHeader';
import RadioButtonColumn from './RadioButtonColumn';
import TimeColumn from './TimeColumn';
import CardColumn from './CardColumn';
import {red, orange, purple, green, darkPurple} from '../../styles';
import {ScrollView} from 'react-native-gesture-handler';
const DaysList = ({item}) => {
  const checkStatus = useCallback(status => {
    if (status == 'Approved') {
      return green;
    } else if (status == 'Pending') {
      return orange;
    } else if (status == 'Buyer Reschedule') {
      return purple;
    }
  }, []);

  return (
    <View style={styles.container}>
      <DayHeader dayName={item.dayName} date={item.date}></DayHeader>
      {item?.cardsData?.map((data, index, array) => {
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

export default DaysList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
