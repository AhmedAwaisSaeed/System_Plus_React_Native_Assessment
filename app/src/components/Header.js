import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton, Card} from 'react-native-paper';

const Header = ({title}) => {
  return (
    <Card elevation={5} style={styles.cardContainer}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </Card>
  );
};

export default Header;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    zIndex: 5,
  },
  container: {
    paddingTop: 80,
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
