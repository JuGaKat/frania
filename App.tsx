import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import AccountScreen from './MYCODE/screens/AccountScreen';
import HomeScreen from './MYCODE/screens/HomeScreen';
import NewScreen from './MYCODE/screens/NewScreen';

const App = () => {
  const [screenNumber, setScreenNumber] = useState<number>(1);

  const handleButton = (numerWidoku: number) => {
    setScreenNumber(numerWidoku);
  };

  const podmianaWidokow = () => {
    switch (screenNumber) {
      case 1:
        return <HomeScreen onClick={handleButton} />;
      case 2:
        return <AccountScreen zmianaWidoku={handleButton} />;
      case 3:
        return <NewScreen onClick={handleButton} />;

      default:
        return <HomeScreen onClick={handleButton} />;
    }
  };

  return <SafeAreaView style={{flex: 1}}>{podmianaWidokow()}</SafeAreaView>;
};

export default App;
