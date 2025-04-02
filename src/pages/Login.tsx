import React from 'react';
import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../common/types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

export const Login = ({navigation}: Props) => {
  const [text, onChangeText] = useState('ID');
  return (
    <View>
      <TextInput></TextInput>

    </View>
  )
}