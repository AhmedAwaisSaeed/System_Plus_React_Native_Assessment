import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {RadioButton, Card} from 'react-native-paper';
import {red, orange, purple, green, darkPurple} from '../../styles';
import MyButton from '../../components/MyButton';
import avatarIcon from '../../assets/avatar.png';
import locationIcon from '../../assets/location.png';
const CardColumn = ({name, location, status, checkStatus}) => {
  return (
    <View style={{flex: 1}}>
      <Card
        elevation={5}
        style={[styles.cardContainer, {backgroundColor: checkStatus(status)}]}>
        <View style={styles.rowStyle}>
          <View
            style={{
              flex: 0.1,
              // backgroundColor:'pink'
            }}>
            <Image style={styles.iconStyle} source={locationIcon}></Image>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.locationTextStyle}>{location}</Text>
          </View>
        </View>

        <View style={[styles.rowStyle, {marginTop: 10}]}>
          <View
            style={{
              flex: 0.2,
              // backgroundColor:'pink'
            }}>
            <Image style={styles.iconStyle} source={avatarIcon}></Image>
          </View>
          <View style={styles.nameStyle}>
            <Text style={styles.nameTextStyle}>{name}</Text>
          </View>
        </View>

        <MyButton text={status} color={checkStatus(status)}></MyButton>
      </Card>
    </View>
  );
};

export default CardColumn;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    marginBottom: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  locationTextStyle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '800',
  },
  nameTextStyle: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
  },
  iconStyle: {
    flex: 1,
    resizeMode: 'contain',
  },
  rowStyle: {
    flexDirection: 'row',
  },
  nameStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
