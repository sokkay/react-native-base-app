import { HomeCard } from '@components/HomeCard/HomeCard';
import { MainScreenProps } from '@screens/MainNavigationStack';
import { homeScreenItems } from 'constants/homeScreenItems';
import { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

type Props = MainScreenProps<'home'>;

export const HomeScreen: FC<Props> = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={homeScreenItems}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 40,
          paddingTop: 10,
        }}
        renderItem={({ item }) => (
          <HomeCard
            item={item}
            onPress={() => navigation.navigate(item.screenName)}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
