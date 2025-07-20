// codigos de definiçao de tipos de type Script
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme; 


// criando uma tipagem no modo npm  sobrescrevendo uma coisa nova dentro do styled components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}