import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = () => {
  const [title, setTitle] = useState('Pies');

  const handleButton = () => {
    setTitle('2 pieski');
  };

  return (
    <View
      style={{
        backgroundColor: 'blue',
        height: '60%',
        width: '100%',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
        }}>
        {title}
      </Text>
      <TouchableOpacity
        onPress={handleButton}
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
