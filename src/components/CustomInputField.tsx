import { StyleSheet } from 'react-native';
import {
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  View,
  ViewProps
} from './Themed';

type CustomInputFieldProps_ = {
  label: string;
  containerStyle?: ViewProps['style'];
  inputStyle?: TextInputProps['style'];
  labelStyle?: TextProps['style'];
  error?: any;
};

export type CustomInputFieldProps = CustomInputFieldProps_ & TextInputProps;

export default function CustomInputField({
  label,
  containerStyle,
  inputStyle,
  labelStyle,
  error,
  ...inputProps
}: CustomInputFieldProps) {
  return (
    <View style={[containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput style={[styles.inputField, inputStyle]} {...inputProps} />
      {error && <Text style={{ fontSize: 10, color: 'red' }}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  inputField: {
    padding: 7,
    borderRadius: 7
  }
});
