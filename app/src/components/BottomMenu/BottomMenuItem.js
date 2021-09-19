import React from 'react';
import {View,Image,Text} from 'react-native';
import {red, grey,purple} from '../../styles';
export const BottomMenuItem = ({iconName, isCurrent}) => {
  console.log("iconName=",iconName);
  const getImage = name => {
    switch (name) {
      case 'Calendar':
        return require("../../assets/Calendar.png")
      default:
        return require("../../assets/Listings.png")
    }
  }
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //  backgroundColor:'pink'
      }}>
      <>
      <Image style={{tintColor:isCurrent ? purple : grey }}  source={getImage(iconName)}></Image> 
      <Text style={{ marginTop:10,fontSize:16,color: isCurrent ? purple :  grey}}>
              {iconName}
        </Text>
        </>
    </View>
  );
};
