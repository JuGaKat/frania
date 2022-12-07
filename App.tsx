import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import AccountScreen from './MYCODE/screens/AccountScreen';
import HomeScreen from './MYCODE/screens/HomeScreen';

const App = () => {
  const [visibleAccount, setVisibleAccount] = useState<boolean>(false);

  const handleButton = () => {
    setVisibleAccount(prevState => !prevState);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {visibleAccount ? (
        <AccountScreen onClick={handleButton} />
      ) : (
        <HomeScreen onClick={handleButton} />
      )}
    </SafeAreaView>
  );
};

export default App;
