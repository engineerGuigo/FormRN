import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import useForm from './useForm';
import validate from './validateInfo';

export default function FormSignUp({submitForm}) {
  const {handleChange, handleSubmit, values, errors} = useForm(validate);
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
      onSubmit={handleSubmit}>
      <TextInput
        style={{
          alignItems: 'center',
          backgroundColor: '#FFFF',
          padding: 10,
          width: 200,
          borderWidth: 1,
          borderRadius: 50,
          borderColor: '#00AFD3',
          height: 50,
        }}
        id="username"
        type="text"
        name="username"
        onChangeText={handleChange}
        value={values.username}
        placeholder="Inserta tu Username"></TextInput>
      {errors.username && <Text>{errors.username}</Text>}
      <TextInput
        style={{
          marginTop: 10,
          alignItems: 'center',
          backgroundColor: '#FFFF',
          padding: 10,
          width: 200,
          borderWidth: 1,
          borderRadius: 50,
          borderColor: '#00AFD3',
          height: 50,
        }}
        id="email"
        type="email"
        name="email"
        onChangeText={handleChange}
        value={values.email}
        placeholder="Inserta tu Email"></TextInput>
      {errors.email && <Text>{errors.email}</Text>}
      <TextInput
        style={{
          alignItems: 'center',
          backgroundColor: '#FFFF',
          padding: 10,
          width: 200,
          borderWidth: 1,
          borderRadius: 50,
          borderColor: '#00AFD3',
          height: 50,
          marginTop: 10,
        }}
        id="password"
        type="password"
        name="password"
        onChangeText={handleChange}
        value={values.password}
        placeholder="Ingrese su Contraseña"
        secureTextEntry={true}></TextInput>
      {errors.password && <Text>{errors.password}</Text>}
      <TextInput
        style={{
          alignItems: 'center',
          backgroundColor: '#FFFF',
          padding: 10,
          width: 200,
          borderWidth: 1,
          borderRadius: 50,
          borderColor: '#00AFD3',
          height: 50,
          marginTop: 10,
        }}
        id="password2"
        type="password"
        name="password2"
        onChangeText={handleChange}
        value={values.password2}
        placeholder="Confirme su Contraseña"
        secureTextEntry={true}></TextInput>
      {errors.password2 && <Text>{errors.password2}</Text>}
      <TouchableOpacity
        type="submit"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00AFD3',
          padding: 10,
          width: '70%',
          borderWidth: 3,
          borderRadius: 15,
          borderColor: 'lightblue',
          height: '7%',
          marginTop: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#ffff',
              fontSize: 24,
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}>
            Registrarse
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={{color: '#8B8B8B', marginTop: 20}}>
        Ya tienes una cuenta?
      </Text>
    </View>
  );
}
