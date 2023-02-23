import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import AccountScreen from './MYCODE/screens/AccountScreen';
import HomeScreen from './MYCODE/screens/HomeScreen';
import NewScreen from './MYCODE/screens/newScreen/NewScreen';
import MojScreen from './MYCODE/screens/MojScreen/MojScreen';
import APIScreen from './MYCODE/screens/APIScreen';
import PrzyciskScreen from './MYCODE/screens/PrzyciskScreen/PrzyciskScreen';

const App = () => {
  const [screenNumber, setScreenNumber] = useState<number>(5);

  const handleButton = (numerWidoku: number) => {
    setScreenNumber(numerWidoku);
  };

  const podmianaWidokow = () => {
    switch (screenNumber) {
      case 1:
        return <HomeScreen onClick={handleButton} />;
      case 2:
        return <AccountScreen onClick={handleButton} />;
      case 3:
        return <NewScreen onClick={handleButton} />;
      case 4:
        return <MojScreen onClick={handleButton} />;
      case 5:
        return <APIScreen onClick={handleButton} />;
      case 6:
        return <PrzyciskScreen onClick={handleButton} />;
      default:
        return <HomeScreen onClick={handleButton} />;
    }
  };

  return <SafeAreaView style={{flex: 1}}>{podmianaWidokow()}</SafeAreaView>;
};

export default App;
