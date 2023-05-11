import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import {FlowerPot, ArrowFlower, Apron, Angle} from '../assets/icons';
import Lottie from 'lottie-react-native';
import {Flower} from '../assets/lottie';
import {useNavigation} from '@react-navigation/native';
import {palette} from '../assets/colors/palette';

type Props = {onClick: any};

const HomeScreen = (onClick: Props) => {
  const [title, setTitle] = useState('');
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [napis, setNapis] = useState<string>('');
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const visibleButton = () => {
    setVisible(prevState => !prevState);
  };

  const toggleModal = () => {
    setVisibleModal(prevState => !prevState);
  };

  const przejscieNaWidokLicznik = () => {
    navigation.navigate('Licznik');
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const [przycisk, setPrzycisk] = useState('START');
  const zmianaPrzycisku = () => {
    if (przycisk === 'START') {
      setPrzycisk('STOP');
      setNapis('Welcome');
    } else {
      setPrzycisk('START');
      setNapis('');
    }
  };
  const animationRef = useRef<Lottie>(null);

  const startAnimation = () => {
    animationRef.current?.play();
  };

  const stopAnimation = () => {
    animationRef.current?.pause();
  };
  const pro = () => {
    if (przycisk === 'START') {
      startAnimation();
    } else {
      stopAnimation();
    }
  };
  const handleButton = () => {
    if (title === '') {
      setTitle('2 pieski');
    } else {
      setTitle('Pies');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      stopAnimation();
    }, 5000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: palette.colorOne,
        flex: 1,
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40, color: palette.colorSeven}}>
          Kwiaciarnia
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10,
        }}>
        <TouchableOpacity
          style={{width: '100%', height: '100%', flexDirection: 'row'}}>
          <Angle height={'25%'} width={'25%'} onPress={visibleButton} />
          <FlowerPot height={'25%'} width={'25%'} />
          <Apron height={'25%'} width={'25%'} />
          <ArrowFlower height={'25%'} width={'25%'} />
        </TouchableOpacity>
      </View>
      {visible && (
        <View style={{width: 500, height: 100, backgroundColor: 'red'}} />
      )}
      <View
        style={{
          flex: 2,
          backgroundColor: palette.colorTwo,
        }}>
        <Text
          style={{
            fontSize: 30,
            justifyContent: 'space-around',
            alignSelf: 'center',
            fontStyle: 'italic',
            color: palette.colorSix,
          }}>
          {napis}
        </Text>
        <Lottie ref={animationRef} source={Flower} loop autoPlay />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10,
          marginLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={przejscieNaWidokLicznik}
          style={{
            width: 80,
            height: 80,
            backgroundColor: palette.colorFour,
            borderRadius: 20,
            padding: 12,
            marginRight: 10,
          }}>
          <Text style={{color: palette.colorSeven}}> LICZNIK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={zmianaPrzycisku}
          onPressIn={pro}
          style={{
            width: 80,
            height: 80,
            backgroundColor: palette.colorFour,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginRight: 10,
          }}>
          <Text style={{color: palette.colorSeven}}>{przycisk}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={zmianaPrzycisku}
          style={{
            width: 80,
            height: 80,
            backgroundColor: palette.colorFour,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginRight: 10,
          }}>
          <Text style={{color: palette.colorSeven}}>PRZYCISK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleModal}
          style={{
            width: 80,
            height: 80,
            backgroundColor: palette.colorFour,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text style={{color: palette.colorSeven}}>MODAL</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => {
          toggleModal();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={toggleModal}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomeScreen;
