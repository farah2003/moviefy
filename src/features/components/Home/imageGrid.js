import { FlatList, Pressable, Text } from 'react-native';
import { Container, MovieContainer, MovieImage } from '../../../components';

export const ImageGrid = ({ data, navigation }) => {
  const Item = ({ src }) => (
    <MovieContainer>
      <MovieImage
        source={{
          uri: src,
        }}
      />
    </MovieContainer>
  );

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.navigate('MovieDeatails', {
          name: item.original_title,
          id: item.id,
        })
      }
    >
      <Item src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} />
    </Pressable>
  );
  return (
    <Container>
      <FlatList
        numColumns={3}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};
