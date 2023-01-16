import { Mukta } from '@next/font/google';

const mukta = Mukta({
  weight: ['200', '400'],
  display: 'swap',
  subsets: ['latin'],
});

export default {
  grid: {
    container: '144rem',
  },
  colors: {
    primaryNormal: '#E42B2F',
    primaryDark: '#AB0E12',
    primaryLight: '#FA3C41',

    secondaryNormal: '#1850E1',
    secondaryDark: '#1141BD',
    secondaryLight: '#4271EB',

    blackNormal: '#0B1425',
    blackDark: '#040C1B',
    blackLight: '#111929',

    blue: '#14181F',
    blueDark: '#0A0C10',
    blueLight: '#272A31',
    blackLighten: '#293140',
    blackDarken: '#090F1D',

    white: '#EDF1F7',
    whiteDark: '#E5E9EF',
    whiteLight: '#F4F7FB',

    gray1: '#252626',
    gray2: '#353536',
    gray3: '#4C4C4D',
    gray4: '#646465',
    gray5: '#7C7C7D',
    gray6: '#949494',
    gray7: '#9EA0A3',

    red: '#EA1D22',
    redDark: '#B31317',
    redLight: '#F02A2F',

    greenNormal: '#0BB07B',
    greenDark: '#28bb49',
    greenLight: '#50e170',

    yellowNormal: '#FFCE52',
    yellowDark: '#d9b043',
    yellowLight: '#ffd76b',
  },
  font: {
    family: {
      primary: `${mukta.style.fontFamily}, "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"`,
    },
    light: 300,
    regular: 400,
  },
} as const;
