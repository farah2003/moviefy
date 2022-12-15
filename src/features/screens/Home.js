import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Text as TextSvg } from 'react-native-svg';
import { Octicons } from '@expo/vector-icons';
import {
  FlatList,
  Pressable,
  TextInput,
  ActivityIndicator,
  Text,
} from 'react-native';

import {
  SafeArea,
  Search,
  Question,
  NumberSvg,
  NavigationWapper,
  MovieImageWrapper,
  SuggestedMovieImage,
} from '../../components/index';

import { MoiveContext } from '../../hooks/context';
import { CategoriesNavigator } from '../../navigation/index';

const Item = ({ src, number }) => (
  <MovieImageWrapper>
    <SuggestedMovieImage
      source={{
        uri: src,
      }}
    />
    <NumberSvg>
      <TextSvg
        fill='#242A32'
        stroke='#0296E5'
        fontSize={100}
        fontWeight='bold'
        x={25}
        y={78}
      >
        {number + 1}
      </TextSvg>
    </NumberSvg>
  </MovieImageWrapper>
);

export const HomeScreen = ({ navigation }) => {
  const { setMovieId } = useContext(MoiveContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let movies = [];
    const source = axios.CancelToken.source();
    const fetchMovies = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US&page=1',
          { cancelToken: source.token }
        );

        results.map(({ backdrop_path, id, original_title }) => {
          movies.push({ backdrop_path, id, original_title });
        });
        setData(movies);
        setLoading(false);
        setError(false);
      } catch (e) {
        setData([]);
        setError(ture);
        setLoading(false);
      }
    };
    fetchMovies();
    return () => source.cancel();
  }, []);
  //
  const renderItem = ({ item, index }) => {
    return (
      <Pressable
        onPress={() => {
          setMovieId(item.id);
          navigation.navigate('MovieDeatails', {
            name: item.original_title,
            id: item.id,
          });
        }}
      >
        <Item
          number={index}
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        />
      </Pressable>
    );
  };

  return (
    <SafeArea>
      <Question>What do you want to watch?</Question>
      <Search>
        <TextInput
          placeholder='Search'
          placeholderTextColor='#67686D'
          onFocus={() => navigation.navigate('Search')}
          width='80%'
        />
        <Octicons name='search' size={26} color='#67686D' />
      </Search>

      <NavigationWapper>
        {loading ? (
          <ActivityIndicator size='large' color='#FFFF' />
        ) : (
          <>
            {error ? (
              <Text>Error try again later</Text>
            ) : (
              <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            )}
          </>
        )}
      </NavigationWapper>

      <CategoriesNavigator />
    </SafeArea>
  );
};
