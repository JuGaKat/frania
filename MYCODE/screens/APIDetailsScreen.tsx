import {useEffect, useState} from 'react';
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
import {useNavigation, useRoute} from '@react-navigation/native';

const API_KEY =
  'live_lWEJjGpYFoVQeZTxO3mGsWnTATrrpjwwTu0OSv0iSNkhaq3pynTAqEzFRLQ315b7';

const LINK = 'https://api.thecatapi.com/v1/images/';

const APIDetailsScreen = () => {
  const [catDetails, setCatDetails] = useState<any>();

  const {params} = useRoute();
  // @ts-ignore
  const catId = params ? params.id : null;

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${LINK}${catId}`, {
      method: 'GET',
      headers: {'x-api-key': API_KEY},
    }).then(response =>
      response
        .json()
        .then(json => setCatDetails(json))
        .catch(error => console.log('blad', error)),
    );

    setLoading(false);
  }, [catId]);

  console.log('dane z API', catDetails);

  return (
    <View
      style={{
        backgroundColor: 'gray',
        flex: 1,
      }}>
      <Text style={{fontSize: 26, fontWeight: 'bold'}}>API DETAILS SCREEN</Text>
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
      <View>
        {catDetails || !loading ? (
          <Image
            source={{
              uri: catDetails?.url,
            }}
            style={{height: 200, width: 395}}
          />
        ) : (
          <ActivityIndicator size={'large'} color={'yellow'} />
        )}
      </View>
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

export default APIDetailsScreen;
