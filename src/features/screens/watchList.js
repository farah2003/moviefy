import { Text, View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeArea, Header, HeaderTitle } from '../../components';

export const WatchlistScreen = () => {
  return (
    <SafeArea>
      <Header>
        <Ionicons name='chevron-back' size={24} color='#FFFFFF' />
        <HeaderTitle>Watch List</HeaderTitle>
      </Header>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/Group.png')}
          style={styles.group}
        />
        <Text style={styles.describtion}>There is no movie yet!</Text>
        <Text style={styles.subDescribtion}>
          Find your movie by Type title,{'\n'} categories, years, etc
        </Text>
      </View>
    </SafeArea>
  );
};
const styles = StyleSheet.create({
  content: {
    flex: 0.9,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  group: {
    width: 70,
    height: 85,
  },
  describtion: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  subDescribtion: {
    fontSize: 14,
    fontWeight: '500',
    color: '#92929D',
    textAlign: 'center',
    marginTop: 10,
  },
});
