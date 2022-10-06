import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = () => {
  const wywolajPowiadomienie = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);

  const napiszWKonsoli = () => {
    console.log('test');
  };

  const konsola = () => {
    console.log('Kotek');
  };

  const handleButton = () => {
    wywolajPowiadomienie();
    napiszWKonsoli();
    konsola();
  };

  return (
    <View
      style={{
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
        }}>
        Piesek
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
