import React from 'react';
import {Text, View, TextInput, TextInputProps} from 'react-native';
import {FieldInputProps, FieldMetaProps, FormikState} from 'formik';
import styles from './styles';

export interface TextFieldProps extends TextInputProps {
  field?: any;
  form?: any;
  placeholder?: string;
}

export const TextField = (props: TextFieldProps) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched},
    placeholder,
    ...rest
  } = props;

  const hasError = errors[name];

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        placeholder={placeholder}
        autoCapitalize="none"
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          onBlur(name);
        }}
        value={value}
        {...rest}
      />
      {hasError && touched[name] && (
        <Text style={styles.errorText}>{errors[name]}</Text>
      )}
    </View>
  );
};
