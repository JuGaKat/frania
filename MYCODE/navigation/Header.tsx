import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {GLOBAL_COLORS} from '../ui/colors';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from './Navigation';
import type {StackNavigationProp} from '@react-navigation/stack';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

const Header = (props: any) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

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
    <View style={{flex: 1}}>
      <Text
        style={{
          padding: 10,
        }}>
        Obecny widok: {props.children}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 50,
        }}>
        <TouchableOpacity
          style={{backgroundColor: 'yellow', paddingEnd: 50}}
          onPress={navigateToApiScreen}>
          <Text>API</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'yellow', paddingEnd: 50}}
          onPress={navigateToLicznikScreen}>
          <Text>Licznik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'yellow', paddingEnd: 50}}
          onPress={navigateToPrzyciskScreen}>
          <Text>Przycisk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'yellow', paddingEnd: 50}}
          onPress={navigateToMojScreen}>
          <Text>MojScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'yellow', paddingEnd: 50}}
          onPress={navigateToAccountScreen}>
          <Text>AccountScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
