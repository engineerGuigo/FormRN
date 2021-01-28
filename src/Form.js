import React from 'react';
import {View} from 'react-native';
import FormSignUp from './FormSignUp';

export default function Form() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FormSignUp />
    </View>
  );
}
