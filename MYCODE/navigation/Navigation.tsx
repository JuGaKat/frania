import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LicznikScreen from '../screens/LicznikScreen';
import APIScreen from '../screens/APIScreen';
import PrzyciskScreen from '../screens/PrzyciskScreen/PrzyciskScreen';
import Header from './Header';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator initialRouteName={' Home'}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: props => <Header {...props} />}}
        />
        <Stack.Screen
          name="Licznik"
          component={LicznikScreen}
          options={{headerTitle: props => <Header {...props} />}}
        />
        <Stack.Screen
          name="API"
          component={APIScreen}
          options={{headerTitle: props => <Header {...props} />}}
        />
        <Stack.Screen
          name="Przycisk"
          component={PrzyciskScreen}
          options={{headerTitle: props => <Header {...props} />}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Navigation;
