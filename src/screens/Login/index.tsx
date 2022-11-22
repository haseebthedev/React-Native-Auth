import React, {FC, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../../App';
import {Formik, Field, FormikState} from 'formik';
import {TextField, Button} from '../../components';
import {ScreenEnum} from '../../enums';
import {loginValidationSchema} from '../../utils/validations';
import {UserEmailLogin} from '../../services/AuthService';
import {setInAsyncStorage} from '../../utils/storage';
import styles from './styles';
import googleIcon from '../../assets/icons/googleIcon.png';
import appleIcon from '../../assets/icons/appleIcon.png';
import facebookIcon from '../../assets/icons/facebookIcon.png';

interface UserI {
  email: string;
  password: string;
}

export const LoginScreen: FC<
  NativeStackScreenProps<StackParamList, 'Login'>
> = ({navigation}) => {
  const _loginHandler = async ({email, password}: UserI) => {
    let response = await UserEmailLogin(email, password);

    if (response && response._id && response.access_token) {
      // save response in AsyncStorage for user Session
      let result = await setInAsyncStorage('USER:SESSION', response);

      // Now, navigate to homepage
      if (result) {
        navigation.navigate(ScreenEnum.HOME);
      }
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{justifyContent: 'center'}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
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
        onSubmit={values => _loginHandler(values)}>
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
        <TouchableOpacity>
          <Text
            style={[
              styles.textCenterAlign,
              styles.memberText,
              styles.registerText,
            ]}>{` Register Now!`}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
