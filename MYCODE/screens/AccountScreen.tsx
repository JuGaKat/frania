import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

type Props = {
  zmianaWidoku: any;
};
type PrzepisType = {
  id: number;
  tytul: string;
  cena: number;
};
const tablicaPrzepisow: Array<PrzepisType> = [
  {
    id: 0,
    tytul: 'Nalesniki',
    cena: 10.5,
  },
  {
    id: 1,
    tytul: 'Jajecznica',
    cena: 20,
  },
  {
    id: 2,
    tytul: 'Kanapki',
    cena: 5,
  },
  {
    id: 3,
    tytul: 'Nalesniki',
    cena: 10.5,
  },
  {
    id: 4,
    tytul: 'Jajecznica',
    cena: 20,
  },
  {
    id: 5,
    tytul: 'Kanapki',
    cena: 5,
  },
];

const renderujPrzepis = ({item}: {item: PrzepisType}) => {
  return (
    <TouchableOpacity>
      <Text style={naszeStyle.itemText}>
        {item.tytul}
        {item.cena}PLN
      </Text>
    </TouchableOpacity>
  );
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
      <View style={naszeStyle.view2}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tablicaPrzepisow}
          renderItem={renderujPrzepis}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Image
        style={naszeStyle.obrazek}
        resizeMode={'contain'}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Zielony_listek.svg/1920px-Zielony_listek.svg.png',
        }}
      />
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
    flex: 0.3,
    backgroundColor: 'green',
  },
  itemText: {
    backgroundColor: 'grey',
    borderRadius: 2,
    borderWidth: 1,
    padding: 5,
    margin: 6,
  },
  obrazek: {
    width: 300,
    height: 300,
  },
});

export default AccountScreen;
