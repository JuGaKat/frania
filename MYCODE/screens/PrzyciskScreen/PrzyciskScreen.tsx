import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
type Props = {
  onClick: (numerWidoku: number) => void;
};

const PrzyciskScreen = ({onClick}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onClick(6)}
      style={{
        width: 50,
        height: 50,
        backgroundColor: 'pink',
      }}>
      <Text>PrzyciskScreen</Text>
    </TouchableOpacity>
  );
};
export default PrzyciskScreen;
