import React, {ReactNode} from 'react';
import {
  ImageBackground,
  ImageResizeMode,
  ImageSourcePropType,
} from 'react-native';

type Props = {
  children: ReactNode;
  isActive: boolean;
  resizeMode: ImageResizeMode;
  source: ImageSourcePropType;
};

const BackgroundImageChanger = ({
  children,
  isActive,
  resizeMode,
  source,
}: Props) => {
  if (!isActive) {
    if (children) {
      return children;
    } else {
      return null;
    }
  }

  return (
    <ImageBackground
      style={{height: '100%'}}
      resizeMode={resizeMode}
      source={source}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImageChanger;
