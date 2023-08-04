import { MaterialIcons } from '@expo/vector-icons';
import { DefaultTheme } from '@react-navigation/native';
import { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  onPress: () => void;
};

export const HeaderRight: FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons
        name='home'
        size={24}
        color={DefaultTheme.colors.primary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
