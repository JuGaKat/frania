import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

type Props = {
  onClick: any;
};
const MojScreen = ({onClick}: Props) => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => onClick(1)}
          style={{
            width: 100,
            height: 100,
          }}>
          <Text>ZMIANA WIDOKU na HOME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MojScreen;
