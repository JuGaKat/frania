import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {DogIcon, FishIcon} from '../assets/icons';

type Props = {
  onClick: any;
};
const HomeScreen = ({onClick}: Props) => {
  const [title, setTitle] = useState('Pies');

  const animationRef = useRef<Lottie>(null);

  const startAnimation = () => {
    animationRef.current?.play();
  };

  const stopAnimation = () => {
    animationRef.current?.pause();
  };

  const costam = () => {
    if (title === 'Pies') {
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
        backgroundColor: 'blue',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 80,
        }}>
        {title}
      </Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <DogIcon height={'100%'} width={'50%'} />
        <FishIcon height={'100%'} width={'50%'} />
      </View>
      <View style={{height: '40%', width: '50%'}}>
        <Lottie
          ref={animationRef}
          source={require('../assets/lottie/dog_animation.json')}
          loop
          autoPlay
        />
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
          onPress={startAnimation}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>START</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={stopAnimation}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>STOP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
