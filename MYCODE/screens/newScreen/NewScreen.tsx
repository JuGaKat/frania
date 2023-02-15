import {View} from 'react-native';
import React, {useState} from 'react';
import {MenuImage} from '../../assets/images';
import BackgroundImageChanger from '../../components/BackgroundImageChanger';
import NewScreenContent from './components/NewScreenContent';

type Props = {
  onClick: (numerWidoku: number) => void;
};
const NewScreen = ({onClick}: Props) => {
  const [zmienna, setZmienna] = useState<boolean>(true);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: zmienna ? 'pink' : 'blue',
      }}>
      {/*@ts-ignore*/}
      <BackgroundImageChanger
        isActive={zmienna}
        source={MenuImage}
        resizeMode={'contain'}>
        <NewScreenContent
          onClick={onClick}
          setZmienna={setZmienna}
          zmienna={zmienna}
        />
      </BackgroundImageChanger>
    </View>
  );
};

export default NewScreen;
