import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import {DogIcon, FishIcon, RabbitIcon, CatIcon} from '../assets/icons';
import Lottie from 'lottie-react-native';
import {SwimmingLottie} from '../assets/lottie';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [title, setTitle] = useState('');
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setVisibleModal(prevState => !prevState);
  };

  const przejscieNaWidokLicznik = () => {
    navigation.navigate();
  };

  const [przycisk, setPrzycisk] = useState('START');
  const zmianaPrzycisku = () => {
    if (przycisk === 'START') {
      setPrzycisk('STOP');
    } else {
      setPrzycisk('START');
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

  const costam = () => {
    if (title === '') {
      setTitle('Homescreen');
    } else {
      setTitle('');
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
        backgroundColor: 'blue',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
        }}>
        {title}
      </Text>
      <View
        style={{
          width: 200,
          height: 200,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{width: '25%', height: '25%'}}
          onPress={costam}>
          <DogIcon height={'100%'} width={'100%'} />
        </TouchableOpacity>
        <CatIcon height={'25%'} width={'25%'} />
        <FishIcon height={'25%'} width={'25%'} />
        <RabbitIcon height={'25%'} width={'25%'} />
      </View>
      <View
        style={{
          height: '30%',
          width: '100%',
          backgroundColor: 'grey',
          flexDirection: 'column',
        }}>
        <Lottie ref={animationRef} source={SwimmingLottie} loop autoPlay />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={przejscieNaWidokLicznik}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>ZMIANA WIDOKU na LICZNIK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={zmianaPrzycisku}
          onPressIn={pro}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{przycisk}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={zmianaPrzycisku}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{przycisk}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleModal}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{przycisk}</Text>
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
