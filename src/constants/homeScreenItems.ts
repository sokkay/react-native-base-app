import { MainNavigationStackRouteParamList } from '@screens/MainNavigationStack';

export type HomeScreenItem = {
  title: string;
  description: string;
  screenName: keyof MainNavigationStackRouteParamList;
};

export const homeScreenItems: HomeScreenItem[] = [
  {
    title: 'Navegadores Anidados',
    description: 'Demostración de navegadores anidados',
    screenName: 'nestedStack',
  },
];
