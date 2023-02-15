import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Image,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {MenuImage} from '../assets/images';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Lottie from 'lottie-react-native';
import {CatIcon, DogIcon, FishIcon, RabbitIcon} from '../assets/icons';

type Props = {
  onClick: any;
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
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText: any) => {
    console.log(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: zmienna === 'Przycisk on' ? 'pink' : 'blue',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <TouchableOpacity
          onPress={() => onClick(4)}
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
      <View
        style={{
          width: '100%',
          height: '10%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'grey',
        }}>
        <DogIcon height={'25%'} width={'25%'} />
        <CatIcon height={'25%'} width={'25%'} />
        <FishIcon height={'25%'} width={'25%'} />
        <RabbitIcon height={'25%'} width={'25%'} />
      </View>
      <Text>Jakis tam</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={mojStyl.inputStyle}
          onChangeText={goalInputHandler}
          placeholder="Wpisuje text"
        />
        <Button title="Button" onPress={addGoalHandler} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={mojStyl.obrazek}
          resizeMode={'contain'}
          source={MenuImage}
        />
      </View>
    </View>
  );
};
const mojStyl = StyleSheet.create({
  widokGlowny: {
    flex: 0.5,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touchablePrzycisk: {
    borderColor: 'black',
    borderWidth: 3,
    width: 100,
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '70%',
    marginRight: 10,
    padding: 8,
  },
  obrazek: {
    width: 200,
    height: 200,
  },
  input: {
    height: 60,
    margin: 30,
    borderWidth: 1,
    padding: 20,
  },
});
export default NewScreen;
