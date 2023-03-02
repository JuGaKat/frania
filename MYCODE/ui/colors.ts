const palette = {
  blue: {
    '0': '#FFFFFF',
    '50': '#EBEDF9',
    '100': '#C3C8EE',
    '200': '#9ba4e3',
    '300': '#737fd8',
    '400': '#4c5bcd',
    '500': '#4151CA',
    '600': '#3241b3',
    '700': '#27338c',
    '800': '#1c2464',
    '900': '#11163c',
  },
  turquoise: {
    '0': '#FFFFFF',
    '50': '#F6FEFA',
    '100': '#9FF7CF',
    '200': '#6BDFA9',
    '300': '#2BC67E',
    '400': '#24A96C',
    '500': '#1F8657',
    '600': '#196E47',
    '700': '#145638',
    '800': '#0E3E28',
    '900': '#082417',
  },
  green: {
    '0': '#FFFFFF',
    '50': '#F7FFF5',
    '100': '#C4ECC1',
    '200': '#85D680',
    '300': '#47C13E',
    '400': '#3DA636',
    '500': '#32872C',
    '600': '#286B23',
    '700': '#21581D',
    '800': '#1A4417',
    '900': '#102A0E',
  },
  red: {
    '0': '#FFFFFF',
    '50': '#FFF5F5',
    '100': '#FCD8D8',
    '200': '#F9AEAE',
    '300': '#F68585',
    '400': '#F35656',
    '500': '#EC1111',
    '600': '#C00D0D',
    '700': '#9B0A0A',
    '800': '#750808',
    '900': '#4C0505',
  },
  yellow: {
    '0': '#FFFFFF',
    '50': '#FFFCF5',
    '100': '#FFD87A',
    '200': '#F6B413',
    '300': '#D49D16',
    '400': '#B08418',
    '500': '#937019',
    '600': '#7A5B10',
    '700': '#62490A',
    '800': '#4A3602',
    '900': '#2C230A',
  },
  gray: {
    '0': '#FFFFFF',
    '50': '#F9F9FA',
    '100': '#DDDEE3',
    '200': '#BEBFC9',
    '300': '#A2A3B3',
    '400': '#898A9E',
    '500': '#72748B',
    '600': '#5F6073',
    '700': '#4C4D5C',
    '800': '#3A3A47',
    '900': '#23232A',
  },
  pink: {
    '0': '#FFFFFF',
    '50': '#ffecf2',
    '100': '#ffd8e5',
    '200': '#ffb1cc',
    '300': '#ff8bb2',
    '400': '#ff6499',
    '500': '#ff3d7f',
    '600': '#e63772',
    '700': '#cc3166',
    '800': '#99254c',
    '900': '#661833',
  },
  sapling: {
    '0': '#FFFFFF',
    '50': '#fbfbf6',
    '100': '#f8f7ed',
    '200': '#f0efdc',
    '300': '#e9e8ca',
    '400': '#e1e0b9',
    '500': '#dad8a7',
    '600': '#c4c296',
    '700': '#aead86',
    '800': '#838264',
    '900': '#575643',
  },
};

const colors = {
  // common
  bg: '#fff',
  bg50: '#ffffff80',
  bg0: '#ffffff00',
  fg: '#000000',
  white: '#fff',
  black: '#000',
  transparent: 'transparent',

  // schemes
  primary: palette.blue,
  secondary: palette.gray,
  info: palette.pink,
  error: palette.red,
  warning: palette.red,
  success: palette.green,

  ...palette,
};
export default colors;
