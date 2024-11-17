import dark from './dark';
import { base } from './dark';

export default {
  mode: 'light',
  color: {
    black: dark.color.white,
    white: dark.color.black,
    gray: {
      [50]: base[950],
      [100]: base[900],
      [200]: base[800],
      [300]: base[700],
      [400]: base[600],
      [500]: base[500],
      [600]: base[400],
      [700]: base[300],
      [800]: base[200],
      [900]: base[100],
      [950]: base[50],
    },
    red: dark.color.red,
    pink: dark.color.pink,
    orange: dark.color.orange,
    yellow: dark.color.yellow,
    lightGreen: dark.color.lightGreen,
    green: dark.color.green,
    cyan: dark.color.cyan,
    lightBlue: dark.color.lightBlue,
    blue: dark.color.blue,
    indigo: dark.color.indigo,
    purple: dark.color.purple,
    deepPurple: dark.color.deepPurple,
    youngBlue: '#0038d7',
    youngLightBlue: '#00beff',
  },
};
