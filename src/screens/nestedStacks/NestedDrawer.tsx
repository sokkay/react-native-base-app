import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { FC } from 'react';
import { FirstScreen } from './FirstScreen/FirstScreen';
import { SecondScreen } from './SecondScreen/SecondScreen';
import { ThirdStack, ThirdStackRouteParamList } from './ThirdStack/ThirdStack';

export type NestedDrawerRouteParamList = {
  first: object | undefined;
  second: object | undefined;
  third: ThirdStackRouteParamList;
};

export type NestedDrawerScreenProps<
  RouteName extends keyof NestedDrawerRouteParamList
> = DrawerScreenProps<NestedDrawerRouteParamList, RouteName>;

const Drawer = createDrawerNavigator<NestedDrawerRouteParamList>();

export const NestedDrawer: FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='first' component={FirstScreen} />
      <Drawer.Screen name='second' component={SecondScreen} />
      <Drawer.Screen name='third' component={ThirdStack} />
    </Drawer.Navigator>
  );
};
