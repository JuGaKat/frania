import React from 'react';
import {TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {useState} from 'react';

type Props = {
  onClick: (numerWidoku: number) => void;
};

const PrzyciskScreen = ({onClick}: Props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => onClick(1)}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>PrzyciskScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default PrzyciskScreen;
