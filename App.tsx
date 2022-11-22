import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen} from './src/screens';
import {useAuth} from './src/hooks/useAuth';
import {ActivityIndicator} from 'react-native';
import {colors} from './src/constants/colors';

/**
 * Screen with default params
 */
export type StackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  /**
   * Created this custom hook that would help us identify user session if any exists in storage. If found, it
   * would redirect the user to homepage istead of login screen.
   */
  const {initialRoute, loading} = useAuth();

  /**
   * If loading, means we are retriving user data from storage.
   */
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
