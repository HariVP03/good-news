import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const initial: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  cssVarPrefix: 'ck',
};
// const theme: Theme = extendTheme({});

export default extendTheme({ initial });
