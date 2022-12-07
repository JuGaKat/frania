import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import AccountScreen from './MYCODE/screens/AccountScreen';
import HomeScreen from './MYCODE/screens/HomeScreen';

const App = () => {
  const [visibleAccount, setVisibleAccount] = useState<boolean>(false);

  const handleButton = () => {
    setVisibleAccount(prevState => !prevState);
  };

  return (
    <SafeAreaView>
      {visibleAccount ? <AccountScreen /> : <HomeScreen />}
      <TouchableOpacity
        onPress={handleButton}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Przycisk do zmiany widoku</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
