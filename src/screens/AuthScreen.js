import { Alert, Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useCallback, useEffect, useReducer, useState } from 'react';

import Input from '../components/Input';
import { signUp } from '../store/actions/auth.action';
import { useDispatch } from 'react-redux';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true
    for(const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    };
  }
  return state;
};

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      Alert.alert("A ocurrido un error", error, [{ text: "Ok" }])
    }
  }, [error])

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password)
      )
    } else {
      Alert.alert("formulario inválido", "Ingrese un email y usuario válido", [
        { text: "ok" },
      ])
    }
  }

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      })
    },
    [dispatchFormState],
  );

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Blaine App</Text>
        <Text style={styles.subtitle}>Registrarme</Text>
        <View>
          <Input
            id='email'
            label='Email'
            keyboardType='email-address'
            required
            email            
            autoCapitalize='none'
            errorText='Por favor ingrese un email válido'
            onInputChange={onInputChangeHandler}
            initialValue=''
           />
           <Input
            id="password"
            label="Password"
            keyboardType="default"
            required
            password
            secureTextEntry
            autoCapitalize="none"
            errorText="Por favor ingrese una contraseña válida"
            onInputChange={onInputChangeHandler}
            initialValue=""
           />
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Button 
              title={ signUp ? 'Iniciar Sesión' : 'Registrarme'} 
              onPress={handleSignUp}
            /> 
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8EAF6',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#F5F5F5',
    height: '50%',
    padding: 12,
    borderRadius: 5,
    shadowColor: '#90A4AE',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Lora',
    fontWeight: 'bold',
    color: '#82B1FF',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 18,
    textAlign: 'center',
  },  
  footer: {
    marginTop: 42,
  },
  button: {
    marginBottom: 8,
  },
});