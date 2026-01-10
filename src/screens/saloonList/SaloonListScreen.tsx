import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import SalonCard from '../../components/cards/saloncard/SalonCard';
import { styles } from './styles';

const SalonListScreen = ({ route, navigation }: any) => {
  const { type } = route.params;

  /* -------- Redux state -------- */
  const { recommended, newlyJoined, trending } = useSelector(
    (state: any) => state.home
  );

  /* -------- Title mapping -------- */
  const titleMap: Record<string, string> = {
    recommended: 'Recommended Salons',
    newlyJoined: 'Newly Joined',
    trending: 'Trending Near You',
  };

  const title = titleMap[type] || 'Salons';

  /* -------- Data mapping -------- */
  const dataMap: any = {
    recommended,
    newlyJoined,
    trending,
  };

  const salons = dataMap[type] || [];

  /* -------- Sticky header -------- */
  const ListHeader = () => (
    <View style={styles.stickyHeader}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={salons}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SalonCard
            name={item.name}
            category={item.category}
            rating={item.rating}
            type={item.type}
            imageUrl={item.imageUrl}
            onPress={() =>
              navigation.navigate('SalonDetail', {
                salonId: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default SalonListScreen;
