import {
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';
import { FC } from 'react';
import { NestedScreen } from './NestedScreen/NestedScreen';
import { CompositeScreenProps } from '@react-navigation/native';
import { NestedDrawerScreenProps } from '../NestedDrawer';

export type ThirdStackRouteParamList = {
  nestedScreen: { userId: string };
};

export type ThirdStackScreenProps<
  RouteName extends keyof ThirdStackRouteParamList
> = CompositeScreenProps<
  StackScreenProps<ThirdStackRouteParamList, RouteName>,
  NestedDrawerScreenProps<'third'>
>;

const Stack = createStackNavigator<ThirdStackRouteParamList>();

export const ThirdStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='nestedScreen' component={NestedScreen} />
    </Stack.Navigator>
  );
};
