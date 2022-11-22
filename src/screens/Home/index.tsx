import React, {FC, useState, useEffect} from 'react';
import {View, FlatList, StatusBar, ActivityIndicator} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../../App';
import {Header, ListCard} from '../../components';
import {getHomeListing} from '../../services/HomeService';
import {colors} from '../../constants/colors';
import {ScreenEnum} from '../../enums';
import {removeFromAsyncStorage} from '../../utils/storage';
import LogoutIcon from '../../assets/icons/logoutIcon.png';
import styles from './styles';

/**
 * This is the interface for Post
 */
interface PostI {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const HomeScreen: FC<NativeStackScreenProps<StackParamList, 'Home'>> = ({
  navigation,
}) => {
  const [post, setPost] = useState<PostI[]>([]);

  /**
   * This will load the homepage listings by calling getHomeListing() from HomeService.
   */
  const getHomeListingData = async () => {
    let data = await getHomeListing();
    setPost(data);
  };

  /**
   * Remove user session from AsyncStorage and redirect to login screen
   */
  const _logoutHandler = async () => {
    await removeFromAsyncStorage('USER:SESSION');
    navigation.navigate(ScreenEnum.LOGIN);
  };

  useEffect(() => {
    getHomeListingData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Header
        title="Homepage"
        rightIcon={LogoutIcon}
        onRightPress={_logoutHandler}
      />

      <FlatList
        data={post}
        keyExtractor={item => item.id + ''}
        style={styles.listContainer}
        renderItem={({item}) => (
          <ListCard
            id={item.id}
            body={item.body}
            title={item.title}
            userId={item.userId}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <ActivityIndicator size={'large'} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};
