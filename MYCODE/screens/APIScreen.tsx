import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';

const API_KEY =
  'live_lWEJjGpYFoVQeZTxO3mGsWnTATrrpjwwTu0OSv0iSNkhaq3pynTAqEzFRLQ315b7';

const LINK = 'https://api.thecatapi.com/v1/images/search';

const APIScreen = () => {
  const [tablica, setTablica] = useState<Array<string>>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    await fetch(`${LINK}?limit=100`, {
      method: 'GET',
      headers: {'x-api-key': API_KEY},
    }).then(response =>
      response
        .json()
        .then(json => setTablica(json))
        .catch(error => console.log('blad', error)),
    );

    setLoading(false);
  };

  const renderujKota = ({item, index}: {item: any; index: number}) => {
    return (
      <Image
        source={{
          uri: item.url,
        }}
        style={{height: 200, width: 395}}
      />
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'gray',
        flex: 1,
      }}>
      <Text style={{fontSize: 26, fontWeight: 'bold'}}>API SCREEN</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          // onPress={() => onClick(6)}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'black',
          }}>
          <Text style={{color: 'white'}}>ZMIANA WIDOKU na HOME</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={getData}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {loading && <ActivityIndicator />}
            <Text style={styles.buttonTextStyle}>POBIERZ</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        horizontal={true}
        data={tablica}
        renderItem={renderujKota}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={getData}
        refreshing={loading}
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
    height: 50,
  },
  buttonTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
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

export default APIScreen;
