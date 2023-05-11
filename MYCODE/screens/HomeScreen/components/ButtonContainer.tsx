import {TouchableOpacity, View} from 'react-native';
import {Angle, Apron, ArrowFlower, FlowerPot} from '../../../assets/icons';
import React from 'react';

type Props = {
  onPress: () => void;
};

const ButtonContainer = ({onPress}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          paddingHorizontal: 20,
          height: 100,
        }}>
        <Angle height={'100%'} width={'100%'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          paddingHorizontal: 20,
          height: 100,
        }}>
        <FlowerPot height={'100%'} width={'100%'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          paddingHorizontal: 20,
          height: 100,
        }}>
        <Apron height={'100%'} width={'100%'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          paddingHorizontal: 20,
          height: 100,
        }}>
        <ArrowFlower height={'100%'} width={'100%'} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonContainer;
