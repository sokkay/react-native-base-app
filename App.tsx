import { NavigationContainer } from '@react-navigation/native';
import { MainNavigationStack } from '@screens/MainNavigationStack';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigationStack />
    </NavigationContainer>
  );
}
