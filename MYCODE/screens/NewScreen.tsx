import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

type Props = {
  onClick: any;
};

const NewScreen = ({onClick}: Props) => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>NOWY WIDOK</Text>
      <TouchableOpacity
        onPress={() => onClick(1)}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>ZMIANA WIDOKU na HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewScreen;
