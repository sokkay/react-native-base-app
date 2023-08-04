import { HeaderRight } from '@components/Navigation/HeaderRight';
import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { MainScreenProps } from '@screens/MainNavigationStack';
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
> = CompositeScreenProps<
  DrawerScreenProps<NestedDrawerRouteParamList, RouteName>,
  MainScreenProps<'nestedStack'>
>;

const Drawer = createDrawerNavigator<NestedDrawerRouteParamList>();

export const NestedDrawer: FC<MainScreenProps<'nestedStack'>> = ({
  navigation,
}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <HeaderRight onPress={() => navigation.navigate('home')} />
        ),
        headerRightContainerStyle: {
          paddingRight: 5,
        },
      }}
    >
      <Drawer.Screen name='first' component={FirstScreen} />
      <Drawer.Screen name='second' component={SecondScreen} />
      <Drawer.Screen
        name='third'
        component={ThirdStack}
        options={{ headerShown: false, swipeEnabled: false }}
      />
    </Drawer.Navigator>
  );
};
