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
  const [name, setName] = useState<string>('shon');
  const [age, setAge] = useState<number>(30);
  type LudzieTyp = {
    sname: string;
    id: number;
  };
  const ludzie: Array<LudzieTyp> = [
    {sname: 'shon', id: 1},
    {sname: 'karol', id: 2},
    {sname: 'john', id: 3},
    {sname: 'lajla', id: 4},
    {sname: 'klara', id: 5},
    {sname: 'julia', id: 6},
  ];

  const renderujLudzi = ({item}: {item: LudzieTyp}) => {
    return (
      <TouchableOpacity>
        <Text style={styles.item}>{item.sname}</Text>
      </TouchableOpacity>
    );
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
            onChangeText={number => setAge(Number(number))}
          />
          <Text>
            Name:{name}, Age:{age}
          </Text>
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
    margin: 8,
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
