import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
type Props = {
  onClick: any;
};
const AccountScreen = ({onClick}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'column',
      }}>
      <View style={naszeStyle.view1}>
        <TouchableOpacity
          onPress={onClick}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>KLIK2</Text>
        </TouchableOpacity>
      </View>
      <View style={naszeStyle.view2} />
    </View>
  );
};

const naszeStyle = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    backgroundColor: 'green',
    fontSize: 50,
  },

  view1: {
    flex: 0.3,
    backgroundColor: 'red',
  },

  view2: {
    flex: 0.2,
    backgroundColor: 'green',
  },
});

export default AccountScreen;
