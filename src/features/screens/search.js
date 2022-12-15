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
import { Theme } from '../../theme';
import { MoiveContext } from '../../hooks/context';
import { searchApi } from '../../api';

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
    let api = searchApi(value);
    try {
      const {
        data: { results },
      } = await axios.get(api);
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
              color: Theme.color.star,
              marginTop: 5,
            }}
          >
            <Feather
              name='star'
              size={20}
              color={Theme.color.star}
              style={{ marginRight: 10 }}
            />{' '}
            {vote}
          </Icons>
          <Icons>
            <MaterialCommunityIcons
              name='ticket-outline'
              size={20}
              color={Theme.color.primary}
              style={{ marginRight: 10 }}
            />{' '}
            Action
          </Icons>
          <Icons>
            <Feather
              name='calendar'
              size={20}
              color={Theme.color.primary}
              style={{ marginRight: 10 }}
            />{' '}
            {year}
          </Icons>
          <Icons>
            <Feather
              name='clock'
              size={20}
              color={Theme.color.primary}
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
          src={`${imageBaseUrl}${item.image}`}
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
          color={Theme.color.primary}
          onPress={() => navigation.goBack()}
        />
        <HeaderTitle>Search</HeaderTitle>
        <AntDesign name='infocirlceo' size={22} color={Theme.color.primary} />
      </Header>
      <Search>
        <TextInput
          placeholder='Search'
          placeholderTextColor={Theme.color.secandary}
          value={value}
          onChangeText={(text) => setValue(text)}
          onSubmitEditing={() => fetchMovies()}
        />
        <Octicons name='search' size={26} color={Theme.color.secandary} />
      </Search>
      <>
        {loading ? (
          <ActivityIndicator size='large' color={Theme.color.primary} />
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
