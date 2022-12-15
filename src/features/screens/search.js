import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  Ionicons,
  Octicons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import {
  TextInput,
  ActivityIndicator,
  FlatList,
  Text,
  Pressable,
  View,
} from 'react-native';

import {
  Icons,
  SearchListItem,
  MovieTitle,
  SearchListImage,
  Content,
  Describtion,
  Group,
  SubDescribtion,
  SafeArea,
  Search,
  Header,
  HeaderTitle,
} from '../../components/index';

import { MoiveContext } from '../../hooks/context';
export const SearchScreen = ({ navigation }) => {
  const { setMovieId } = useContext(MoiveContext);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let [data, setData] = useState(undefined);
  useEffect(() => {
    setValue('');
  }, []);
  fetchMovies = async () => {
    setLoading(true);
    let searchedList = [];
    try {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US&query=${value}&page=1&include_adult=false`
      );
      results.map(({ id, title, release_date, vote_average, poster_path }) => {
        let year = new Date(release_date).getFullYear();
        searchedList.push({
          id,
          title,
          vote: vote_average,
          image: poster_path,
          year,
        });
      });
      setData(searchedList);
      setLoading(false);
      setError(false);
    } catch (e) {
      setData([]);
      setLoading(false);
      setError(true);
    }
  };

  const Item = ({ title, vote, year, src }) => {
    return (
      <SearchListItem>
        <View style={{ marginRight: 10 }}>
          <SearchListImage
            source={{
              uri: src,
            }}
          />
        </View>
        <View>
          <MovieTitle>{title}</MovieTitle>
          <Icons
            style={{
              color: '#FF8700',
              marginTop: 5,
            }}
          >
            <Feather
              name='star'
              size={20}
              color='#FF8700'
              style={{ marginRight: 10 }}
            />{' '}
            {vote}
          </Icons>
          <Icons>
            <MaterialCommunityIcons
              name='ticket-outline'
              size={20}
              color='#FFFFFF'
              style={{ marginRight: 10 }}
            />{' '}
            Action
          </Icons>
          <Icons>
            <Feather
              name='calendar'
              size={20}
              color='#FFFFFF'
              style={{ marginRight: 10 }}
            />{' '}
            {year}
          </Icons>
          <Icons>
            <Feather
              name='clock'
              size={20}
              color='#FFFFFF'
              style={{ marginRight: 10 }}
            />{' '}
            139 minutes
          </Icons>
        </View>
      </SearchListItem>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          setMovieId(item.id);
          navigation.navigate('MovieDeatails', {
            name: item.title,
            id: item.id,
          });
        }}
      >
        <Item
          title={item.title}
          vote={item.vote}
          year={item.year}
          src={`https://image.tmdb.org/t/p/original${item.image}`}
        />
      </Pressable>
    );
  };
  return (
    <SafeArea>
      <Header>
        <Ionicons
          name='chevron-back'
          size={24}
          color='#FFFFFF'
          onPress={() => navigation.goBack()}
        />
        <HeaderTitle>Search</HeaderTitle>
        <AntDesign name='infocirlceo' size={22} color='#FFF' />
      </Header>
      <Search>
        <TextInput
          placeholder='Search'
          placeholderTextColor='#67686D'
          value={value}
          onChangeText={(text) => setValue(text)}
          onSubmitEditing={() => fetchMovies()}
        />
        <Octicons name='search' size={26} color={'#67686D'} />
      </Search>
      <>
        {loading ? (
          <ActivityIndicator size='large' color='#FFFF' />
        ) : (
          <>
            {error ? (
              <Text>Error try again later</Text>
            ) : (
              <>
                {data ? (
                  <>
                    {data.length ? (
                      <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                      />
                    ) : (
                      <Content>
                        <Group
                          source={require('../../../assets/no-results.png')}
                        />
                        <Describtion>sorry, Movie not found</Describtion>
                        <SubDescribtion>
                          Find your movie by Type title,{'\n'} categories,
                          years, etc
                        </SubDescribtion>
                      </Content>
                    )}
                  </>
                ) : null}
              </>
            )}
          </>
        )}
      </>
    </SafeArea>
  );
};
