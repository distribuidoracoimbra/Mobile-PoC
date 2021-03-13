import {ISystemColor} from '../preferences/theme';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends ISystemColor {}
}
