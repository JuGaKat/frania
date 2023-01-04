import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
type Props = {
  zmianaWidoku: any;
};
const AccountScreen = ({zmianaWidoku}: Props) => {
  const [zmienna, setZmienna] = useState<number>(0);

  const onClick1 = () => {
    if (zmienna === 0) {
      setZmienna(100);
    } else {
      setZmienna(0);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: zmienna === 0 ? 'pink' : 'blue',
        flexDirection: 'column',
      }}>
      <View style={naszeStyle.view1}>
        <TouchableOpacity
          onPress={zmianaWidoku}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Zmiana widoku</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClick1}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{`KLIK ${zmienna}`}</Text>
        </TouchableOpacity>
      </View>
      <View style={naszeStyle.view2} />
    </View>
  );
};

const naszeStyle = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    backgroundColor: 'green',
    fontSize: 50,
  },

  view1: {
    flex: 0.3,
    backgroundColor: 'red',
  },

  view2: {
    flex: 0.2,
    backgroundColor: 'green',
  },
});

export default AccountScreen;
