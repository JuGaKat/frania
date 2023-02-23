import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DogIcon, FishIcon, RabbitIcon, CatIcon} from '../assets/icons';
import Lottie from 'lottie-react-native';
import {SwimmingLottie, RunningLottie} from '../assets/lottie';

type Props = {
  onClick: (numerWidoku: number) => void;
};
const HomeScreen = ({onClick}: Props) => {
  const [title, setTitle] = useState('');

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
          onPress={() => onClick(2)}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>ZMIANA WIDOKU na ACCOUNT</Text>
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
      </View>
    </View>
  );
};

export default HomeScreen;
