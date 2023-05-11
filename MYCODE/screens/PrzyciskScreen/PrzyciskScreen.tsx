import React from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

import {useState} from 'react';

const PrzyciskScreen = () => {
  const [error, setError] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>();
  type LudzieTyp = {
    name: string;
    id: number;
    index?: number;
  };
  const [ludzie, setLudzie] = useState<Array<LudzieTyp>>([
    {name: 'shon', id: 1, index: 0},
    {name: 'karol', id: 2},
    {name: 'john', id: 3},
    {name: 'lajla', id: 4},
    {name: 'klara', id: 5},
    {name: 'julia', id: 6},
  ]);
  const pressHandler = (item: LudzieTyp) => {
    console.log(item);
    handleDeleteItem(item.id);
  };
  const handleChangeAge = (text: string) => {
    // sprawdza czy tekst to numer
    // @ts-ignore
    if (!isNaN(text)) {
      setAge(Number(text)); //wykonuje sie gdy tekst jest numerem
      setError(false);
    } else {
      setError(true);
    }
  };

  const renderujLudzi = ({item}: {item: LudzieTyp}) => {
    return (
      <TouchableOpacity onPress={() => pressHandler(item)}>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const handleDeleteItem = (id: number) => {
    const newArray = ludzie.filter(item => item.id !== id);
    setLudzie(newArray);
  };
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          // onPress={() => onClick(1)}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>PrzyciskScreen</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text>Entered name:</Text>
          <TextInput
            multiline
            style={styles.input}
            placeholder="e.g.JohnDoe"
            onChangeText={val => setName(val)}
          />
          <Text>Entered:age</Text>
          <TextInput
            keyboardType={'numeric'}
            style={styles.input}
            placeholder={'your age'}
            onChangeText={text => handleChangeAge(text)}
          />
          <Text>
            Name:{name}, Age:{error ? 'błąd' : age}
          </Text>
          {error && <Text style={{color: 'red'}}>Uwaga błąd!</Text>}
        </View>
      </View>
      <View style={styles.secondView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ludzie}
          renderItem={renderujLudzi}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  secondView: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  item: {
    marginTop: 30,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
export default PrzyciskScreen;
