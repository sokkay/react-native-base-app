import { StyleSheet, Text, View } from 'react-native';
import { FC, ReactNode } from 'react';
import { NestedDrawerScreenProps } from '../NestedDrawer';

type Props = NestedDrawerScreenProps<'first'>;

export const FirstScreen: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>First Screen Drawer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
