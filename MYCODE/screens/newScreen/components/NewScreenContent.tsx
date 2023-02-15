import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CatIcon, DogIcon, FishIcon, RabbitIcon} from '../../../assets/icons';

type Props = {
  onClick: (numerWidoku: number) => void;
  setZmienna: Dispatch<SetStateAction<boolean>>;
  zmienna: boolean;
};

const NewScreenContent = ({onClick, setZmienna, zmienna}: Props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText: any) => {
    console.log(enteredText);
  };

  const handleButton = () => {
    setZmienna(prevState => !prevState);
  };

  const addGoalHandler = () => {
    // @ts-ignore
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View>
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
          <Text>{zmienna ? 'PRZYCISK OFF' : 'PRZYCISK ON'}</Text>
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
          // TABLICA STYLI
          style={[
            mojStyl.inputStyle,
            mojStyl.inputStyleBackground,
            {fontSize: 25},
          ]}
          onChangeText={goalInputHandler}
          placeholder="Wpisuje text"
        />
        <Button title="Button" onPress={addGoalHandler} />
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
    width: 120,
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
  inputStyleBackground: {
    backgroundColor: 'green',
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

export default NewScreenContent;
