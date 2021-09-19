import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton, Card} from 'react-native-paper';

const Header = ({title}) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </Card>
  );
};

export default Header;

const styles = StyleSheet.create({
  cardContainer: {
    // flex:0.2,
    backgroundColor: '#fff',
    zIndex: 5,
    elevation:15
    
  },
  container: {
    paddingTop: 40,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
});
