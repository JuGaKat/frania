import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

type Props = {
  onClick: any;
};
const HomeScreen = ({onClick}: Props) => {
  const [title, setTitle] = useState('Pies');

  const handleButton = () => {
    setTitle('2 pieski');
  };

  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
        }}>
        {title}
      </Text>
      <TouchableOpacity
        onPress={onClick}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>KLIK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
