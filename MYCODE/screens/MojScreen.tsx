import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';

type Props = {
  onClick: any;
};
const MojScreen = ({onClick}: Props) => {
  const [tablica, setTablica] = useState<Array<string>>([]);
  const [text, setText] = useState('');

  const renderujTekst = ({item, index}: {item: string; index: number}) => {
    return (
      <TouchableOpacity
        onPress={() => handleDeleteItem(index)}
        style={styles.itemStyle}>
        <Text style={styles.itemTextStyle}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const handleDeleteItem = (indexItem: number) => {
    const newArray = tablica.filter((item, index) => index !== indexItem);
    setTablica(newArray);
  };

  const handleAddItem = () => {
    setTablica(prevState => [...prevState, text]);
    setText('');
  };

  useEffect(() => {
    console.log('TEXT', text, 'TABLICA', tablica);
  }, [text, tablica]);

  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
      }}>
      <Text style={{fontSize: 26, fontWeight: 'bold'}}>MOJ SCREEN</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => onClick(1)}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'black',
          }}>
          <Text style={{color: 'white'}}>ZMIANA WIDOKU na HOME</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={setText}
          value={text}
          placeholder="Tutaj wpisz tekst"
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={handleAddItem}>
          <Text style={styles.buttonTextStyle}>ZAPISZ</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={tablica}
        renderItem={renderujTekst}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {width: '100%', flexDirection: 'row'},
  inputStyle: {
    flex: 2,
    backgroundColor: 'white',
  },
  buttonStyle: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    flex: 1,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  itemTextStyle: {
    fontSize: 36,
  },
  itemStyle: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'gray',
  },
});

export default MojScreen;
