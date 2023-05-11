import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LicznikScreen from '../screens/LicznikScreen';
import APIScreen from '../screens/APIScreen';
import PrzyciskScreen from '../screens/PrzyciskScreen/PrzyciskScreen';
import Header from './Header';
import MojScreen from '../screens/MojScreen/MojScreen';
import AccountScreen from '../screens/AccountScreen';
import APIDetailsScreen from '../screens/APIDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  Licznik: undefined;
  API: undefined;
  APIDetails: {id: number};
  Przycisk: undefined;
  MojScreen: undefined;
  AccountScreen: undefined;
};

const Navigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator initialRouteName={'Home'}>
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
          name="APIDetails"
          component={APIDetailsScreen}
          options={{headerTitle: props => <Header {...props} />}}
        />
        <Stack.Screen
          name="Przycisk"
          component={PrzyciskScreen}
          options={{headerTitle: props => <Header {...props} />}}
        />
        <Stack.Screen
          name="MojScreen"
          component={MojScreen}
          options={{headerTitle: props => <Header {...props} />}}
        />
        <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{headerTitle: props => <Header {...props} />}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Navigation;
