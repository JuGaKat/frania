import React from 'react';
import {TouchableOpacity, Text, SafeAreaView} from 'react-native';
import Button from '../PrzyciskScreen/components/Button';
type Props = {
  onClick: (numerWidoku: number) => void;
};
const Log = () => {
  console.log('Loguj sie');
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
      <Button />
    </SafeAreaView>
  );
};
export default PrzyciskScreen;
