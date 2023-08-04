import {
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';
import { FC } from 'react';
import { HomeScreen } from './Home/HomeScreen';
import {
  NestedDrawer,
  NestedDrawerRouteParamList,
} from './NestedStacks/NestedDrawer';

export type MainNavigationStackRouteParamList = {
  home: object | undefined;
  nestedStack: NestedDrawerRouteParamList | undefined;
};

export type MainScreenProps<
  RouteName extends keyof MainNavigationStackRouteParamList
> = StackScreenProps<MainNavigationStackRouteParamList, RouteName>;

const Stack = createStackNavigator<MainNavigationStackRouteParamList>();

export const MainNavigationStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{ title: 'Principal' }}
      />
      <Stack.Screen
        name='nestedStack'
        component={NestedDrawer}
        options={{ headerShown: false, title: '' }}
      />
    </Stack.Navigator>
  );
};
