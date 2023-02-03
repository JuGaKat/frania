import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from 'react';

type Props = {
  onClick: (numerWidoku: number) => void;
};
const NewScreen = ({onClick}: Props) => {
  const [zmienna, setZmienna] = useState('Przycisk on');

  const handleButton = () => {
    if (zmienna === 'Przycisk on') {
      setZmienna('Przycisk off');
    } else {
      setZmienna('Przycisk on');
    }
  };
  return (
    <View style={mojStyl.widokGlowny}>
      <TouchableOpacity
        onPress={() => onClick(1)}
        style={mojStyl.touchablePrzycisk}>
        <Text>ZMIANA WIDOKU na HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleButton}
        style={mojStyl.touchablePrzycisk}>
        <Text>{zmienna}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleButton}
        style={mojStyl.touchablePrzycisk}>
        <Text>{zmienna}</Text>
      </TouchableOpacity>
    </View>
  );
};
const mojStyl = StyleSheet.create({
  widokGlowny: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touchablePrzycisk: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default NewScreen;
