import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {violet} from '../../../assets/colors/violet';
import {Arrow} from '../../../assets/icons';

const Button = () => {
  const {viewStyle, textStyle, imageStyle} = styles;
  return (
    <TouchableOpacity style={viewStyle}>
      <Text style={textStyle}>DOWNLOAD</Text>
      <Arrow style={imageStyle} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    width: 400,
    backgroundColor: violet,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
  },
  imageStyle: {
    width: '5%',
    height: '5%',
  },
});

export default Button;
