import { TextInputProps} from 'react-native/types';

export interface MainInputProps extends TextInputProps {
  topLabel?: string;
  bottomLabel?: string;
  containerStyle?: {};
}