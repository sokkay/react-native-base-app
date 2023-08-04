import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FC, ReactNode } from 'react';

type Props = {
  onPress: () => void;
  item: {
    title: string;
    description: string;
  };
};

export const HomeCard: FC<Props> = ({ onPress, item }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 13,
    paddingTop: 3,
  },
});
