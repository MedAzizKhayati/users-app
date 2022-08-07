import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import UsersScreen from '../screens/HomeScreen';
import { RootStackParamList } from '../types/globals.type';
import LinkingConfiguration from './LinkingConfiguration';
import UserInfoScreen from '../screens/UserInfoScreen';
import { AddUserScreen } from '../screens/AddUserScreen';

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen
        name="Root"
        component={UsersScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfoScreen}
        options={{ title: 'User Profile' }}
      />
      <Stack.Screen
        name="AddUser"
        component={AddUserScreen}
        options={{ title: 'Add User' }}
      />
    </Stack.Navigator>
  );
}
