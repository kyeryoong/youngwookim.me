import dark from './dark';

export default {
  mode: 'light',
  color: {
    black: dark.color.white,
    white: dark.color.black,
    gray: {
      [50]: dark.color.gray[900],
      [100]: dark.color.gray[800],
      [200]: dark.color.gray[700],
      [300]: dark.color.gray[600],
      [400]: dark.color.gray[500],
      [500]: dark.color.gray[400],
      [600]: dark.color.gray[300],
      [700]: dark.color.gray[200],
      [800]: dark.color.gray[100],
      [900]: dark.color.gray[50],
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
  },
};
