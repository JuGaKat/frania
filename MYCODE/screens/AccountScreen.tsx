import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {MenuImage} from '../assets/images';

type Props = {
  onClick: (numerWidoku: number) => void;
};
type PrzepisType = {
  id: number;
  imie: string;
  wiek: number;
  lp?: number;
};
type PrzepisDrugiType = {
  id: number;
  tytul: string;
  cena: number;
  lp?: number;
};
const tablicaPrzepisow: Array<PrzepisType> = [
  {
    id: 0,
    imie: 'Anna ',
    wiek: 10.5,
  },
  {
    id: 1,
    imie: 'Karolina ',
    wiek: 20,
  },
  {
    id: 2,
    imie: 'Ola ',
    wiek: 5,
    lp: 3,
  },
  {
    id: 3,
    imie: 'Zuza ',
    wiek: 10.5,
    lp: 4,
  },
  {
    id: 4,
    imie: 'Maria ',
    wiek: 20,
    lp: 5,
  },
  {
    id: 5,
    imie: 'Sandra ',
    wiek: 5,
    lp: 6,
  },
];
const drugaTablicaPrzepisow: Array<PrzepisDrugiType> = [
  {id: 0, tytul: 'Makaron ', cena: 22.3},
  {
    id: 1,
    tytul: 'Kotlet ',
    cena: 6.5,
  },
  {
    id: 2,
    tytul: 'Szpinak ',
    cena: 7.2,
  },
];
const renderujDrugiPrzepis = ({item}: {item: PrzepisDrugiType}) => {
  return (
    <TouchableOpacity>
      <Text style={naszeStyle.itemText}>
        {item.lp}.{item.tytul}
        {item.cena}PLN
      </Text>
    </TouchableOpacity>
  );
};
const renderujPrzepis = ({item}: {item: PrzepisType}) => {
  return (
    <TouchableOpacity>
      <Text style={naszeStyle.itemText}>
        {item.lp}. {item.imie}
        {item.wiek} PLN
      </Text>
    </TouchableOpacity>
  );
};
const AccountScreen = () => {
  const [zmienna, setZmienna] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ulepszonaTablicaPrzepisow = tablicaPrzepisow.map((element, index) => {
    return {...element, lp: index + 1};
  });
  const ulepszonaTablicaPrzepisowd = drugaTablicaPrzepisow.map(
    (element, index) => {
      return {...element, lp: index + 1};
    },
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          onPress={onClick1}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'yellow',
            alignItems: 'center',
          }}>
          <Text>{`KLIK ${zmienna}`}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{fontSize: 60}}>AccountScreen</Text>
      </View>
      <View style={naszeStyle.view2}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ulepszonaTablicaPrzepisow}
          renderItem={renderujPrzepis}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>Restauracja Vege</Text>
        <Image
          style={naszeStyle.obrazek}
          resizeMode={'contain'}
          source={MenuImage}
        />
      </View>
      <View style={{flex: 0.33, backgroundColor: 'blue'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ulepszonaTablicaPrzepisowd}
          renderItem={renderujDrugiPrzepis}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
    flexDirection: 'row',
  },

  view2: {
    flex: 0.3,
    backgroundColor: 'green',
  },
  itemText: {
    backgroundColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    padding: 9,
    margin: 7,
  },
  obrazek: {
    width: 200,
    height: 200,
  },
});

export default AccountScreen;
