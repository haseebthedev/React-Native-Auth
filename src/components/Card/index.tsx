import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface CardI {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const ListCard = ({userId, id, title, body}: CardI) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topSection}>
        <View style={styles.idBlock}>
          <Text style={styles.idText}>{id}</Text>
        </View>
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
      </View>

      <Text style={styles.authorIdText}>{`Author Id: ` + userId}</Text>
      <Text style={styles.bodyText}>{`Body: ` + body}</Text>
    </View>
  );
};
