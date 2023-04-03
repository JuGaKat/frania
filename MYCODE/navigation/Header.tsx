import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = (props: string) => {
  const navigation = useNavigation();

  const navigateToApiScreen = () => {
    navigation.navigate('API');
  };

  const navigateToLicznikScreen = () => {
    navigation.navigate('Licznik');
  };

  const navigateToPrzyciskScreen = () => {
    navigation.navigate('Przycisk');
  };
  const navigateToMojScreen = () => {
    navigation.navigate('MojScreen');
  };
  const navigateToAccountScreen = () => {
    navigation.navigate('AccountScreen');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Obecny widok: {props.children}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 50,
        }}>
        <TouchableOpacity
          style={{backgroundColor: 'yellow'}}
          onPress={navigateToApiScreen}>
          <Text>API</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'yellow'}}
          onPress={navigateToLicznikScreen}>
          <Text>Licznik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'yellow'}}
          onPress={navigateToPrzyciskScreen}>
          <Text>Przycisk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'yellow'}}
          onPress={navigateToMojScreen}>
          <Text>MojScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'yellow'}}
          onPress={navigateToAccountScreen}>
          <Text>AccountScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
