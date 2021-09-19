import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Listings = ({route}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{route.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81ecec',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
