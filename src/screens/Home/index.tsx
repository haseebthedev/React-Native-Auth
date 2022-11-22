import React, {FC, useState, useEffect} from 'react';
import {View, Text, FlatList, StatusBar, ActivityIndicator} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../../App';
import {Header, ListCard} from '../../components';

import {getHomeListing} from '../../services/HomeService';
import LogoutIcon from '../../assets/icons/logoutIcon.png';
import styles from './styles';
import {colors} from '../../constants/colors';

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
  const [loading, setLoading] = useState<boolean>(false);

  const getHomeListingData = async () => {
    let data = await getHomeListing(setLoading);
    setPost(data);
  };

  const _logoutHandler = () => {
    navigation.navigate('Login');
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
