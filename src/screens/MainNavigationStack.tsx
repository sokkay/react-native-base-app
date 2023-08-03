import {
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';
import { FC } from 'react';
import { HomeScreen } from './home/HomeScreen';

export type MainNavigationStackRouteParamList = {
  home: { userId: string };
  second: undefined;
};

export type MainScreenProps<
  RouteName extends keyof MainNavigationStackRouteParamList
> = StackScreenProps<MainNavigationStackRouteParamList, RouteName>;


const Stack = createStackNavigator<MainNavigationStackRouteParamList>();

export const MainNavigationStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={HomeScreen} />
    </Stack.Navigator>
  );
};
