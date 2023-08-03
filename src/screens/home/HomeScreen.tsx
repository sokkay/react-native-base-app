import { MainScreenProps } from '@screens/MainNavigationStack';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = MainScreenProps<'home'>;

export const HomeScreen: FC<Props> = ({ route, navigation }) => {
  const { userId } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
