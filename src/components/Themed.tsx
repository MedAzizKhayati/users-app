import {
  Text as DefaultText,
  View as DefaultView,
  TouchableOpacity as DefaultTouchableOpaticity,
  SafeAreaView as DefaultSafeAreaView,
  ScrollView as DefaultScrollView,
  TextInput as DefaultTextInput
} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TouchableOpacityProps = ThemeProps &
  DefaultTouchableOpaticity['props'];
export type SafeAreaViewProps = ThemeProps & DefaultSafeAreaView['props'];
export type ScrollViewProps = ThemeProps & DefaultScrollView['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ViewOverlay(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'secondaryBackground'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function SafeAreaView(props: SafeAreaViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'secondaryBackground'
  );

  return (
    <DefaultTouchableOpaticity
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'secondaryBackground'
  );
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const placeHolderTextColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'tint'
  );

  return (
    <DefaultTextInput
      style={[{ backgroundColor, color }, style]}
      placeholderTextColor={placeHolderTextColor}
      {...otherProps}
    />
  );
}
