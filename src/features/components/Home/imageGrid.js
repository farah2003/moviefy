import { useContext } from 'react';
import { FlatList, Pressable, Text } from 'react-native';
import { Container, MovieContainer, MovieImage } from '../../../components';

import { MoiveContext } from '../../../hooks/context';
export const ImageGrid = ({ data, navigation }) => {
  const { setMovieId } = useContext(MoiveContext);
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
      onPress={() => {
        setMovieId(item.id);
        navigation.navigate('MovieDeatails', {
          name: item.original_title,
          id: item.id,
        });
      }}
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
