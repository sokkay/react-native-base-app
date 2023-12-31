import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThirdStackScreenProps } from '../ThirdStack';

type Props = ThirdStackScreenProps<'nestedScreen'>;

export const NestedScreen: FC<Props> = ({ route, navigation }) => {
  const userId = route.params?.userId || 'No hay userId';

  return (
    <View style={styles.container}>
      <Text>Nested in Third Stack Screen</Text>
      <Text>userId: {userId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
