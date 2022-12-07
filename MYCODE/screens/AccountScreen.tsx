import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AccountScreen = () => {
  return (
    <View>
      <Text style={naszeStyle.titleText}> ACCOUNT SCREEN </Text>
      <Text style={naszeStyle.titleText2}> asdasdasddassad </Text>
    </View>
  );
};

const naszeStyle = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    backgroundColor: 'green',
    fontSize: 50,
  },
  titleText2: {
    backgroundColor: 'blue',
  },
});

export default AccountScreen;
