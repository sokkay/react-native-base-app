import {
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';
import { FC } from 'react';
import { NestedScreen } from './NestedScreen/NestedScreen';
import { CompositeScreenProps } from '@react-navigation/native';
import { NestedDrawerScreenProps } from '../NestedDrawer';
import { HeaderRight } from '@components/Navigation/HeaderRight';

export type ThirdStackRouteParamList = {
  nestedScreen: { userId: string } | undefined;
};

export type ThirdStackScreenProps<
  RouteName extends keyof ThirdStackRouteParamList
> = CompositeScreenProps<
  StackScreenProps<ThirdStackRouteParamList, RouteName>,
  NestedDrawerScreenProps<'third'>
>;

const Stack = createStackNavigator<ThirdStackRouteParamList>();

export const ThirdStack: FC<NestedDrawerScreenProps<'third'>> = ({
  navigation,
}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <HeaderRight onPress={() => navigation.navigate('home')} />
        ),
        headerRightContainerStyle: {
          paddingRight: 5,
        },
      }}
    >
      <Stack.Screen name='nestedScreen' component={NestedScreen} />
    </Stack.Navigator>
  );
};
