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
import { Theme } from '../../theme';
import { MoiveContext } from '../../hooks/context';
import { CategoriesNavigator } from '../../navigation/index';
import { imageBaseUrl, moviesTypeApi } from '../../api';

const Item = ({ src, number }) => (
  <MovieImageWrapper>
    <SuggestedMovieImage
      source={{
        uri: src,
      }}
    />
    <NumberSvg>
      <TextSvg
        fill={Theme.color.background}
        stroke={Theme.color.active}
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
      let api = moviesTypeApi('upcoming');
      try {
        const {
          data: { results },
        } = await axios.get(api, { cancelToken: source.token });

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
        <Item number={index} src={`${imageBaseUrl}${item.backdrop_path}`} />
      </Pressable>
    );
  };

  return (
    <SafeArea>
      <Question>What do you want to watch?</Question>
      <Search>
        <TextInput
          placeholder='Search'
          placeholderTextColor={Theme.color.secandary}
          onFocus={() => navigation.navigate('Search')}
          width='80%'
        />
        <Octicons name='search' size={26} color={Theme.color.secandary} />
      </Search>

      <NavigationWapper>
        {loading ? (
          <ActivityIndicator size='large' color={Theme.color.primary} />
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
