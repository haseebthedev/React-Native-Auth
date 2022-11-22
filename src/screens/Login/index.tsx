import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Formik, Field} from 'formik';
import {TextField, Button} from '../../components';
import {loginValidationSchema} from '../../utils/FormValidations';
import styles from './styles';
import {wp} from '../../utils/responsive';

import googleIcon from '../../assets/icons/googleIcon.png';
import appleIcon from '../../assets/icons/appleIcon.png';
import facebookIcon from '../../assets/icons/facebookIcon.png';

export const LoginScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{justifyContent: 'center'}}>
      <Text style={[styles.textCenterAlign, styles.heading]}>Hello Again!</Text>
      <Text
        style={[
          styles.textCenterAlign,
          styles.subHeading,
        ]}>{`Chance to get your\nlife better`}</Text>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={values => console.log(values)}>
        {({submitForm}) => (
          <>
            <Field
              component={TextField}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
            />

            <Field
              component={TextField}
              name="password"
              placeholder="Password"
              secureTextEntry
            />

            <TouchableOpacity style={styles.recoverBtnBlock}>
              <Text style={styles.recoveryText}>Recovery Password</Text>
            </TouchableOpacity>

            <Button title="Login" onPress={() => submitForm()} />
          </>
        )}
      </Formik>

      <Text
        style={[
          styles.textCenterAlign,
          styles.verticalSpacing,
          styles.memberText,
        ]}>
        Or continue with
      </Text>

      <View style={styles.socialBlock}>
        <TouchableOpacity style={styles.socialBtnContainer}>
          <Image source={googleIcon} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtnContainer}>
          <Image source={appleIcon} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtnContainer}>
          <Image source={facebookIcon} style={styles.iconImage} />
        </TouchableOpacity>
      </View>

      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Text
          style={[
            styles.textCenterAlign,
            styles.memberText,
          ]}>{`Not a member?`}</Text>
        <Text
          style={[
            styles.textCenterAlign,
            styles.memberText,
            styles.registerText,
          ]}>{` Register Now!`}</Text>
      </View>
    </ScrollView>
  );
};
