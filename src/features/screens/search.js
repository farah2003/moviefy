import { useState } from 'react';
import { SafeArea, Search, Header, HeaderTitle } from '../../components/index';
import { Ionicons, Fontisto, Octicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import axios from 'axios';
export const SearchScreen = () => {
  const [value, setValue] = useState('');
  fetchMovies = async (text) => {
    try {
      setValue(text);

      const res = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US&query=${value}&page=1&include_adult=false`
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeArea>
      <Header>
        <Ionicons name='chevron-back' size={24} color='#FFFFFF' />
        <HeaderTitle>Watch List</HeaderTitle>
        <Fontisto name='favorite' size={26} color='#FFFF' />
      </Header>
      <Search>
        <TextInput
          placeholder='Search'
          placeholderTextColor='#67686D'
          value={value}
          onChangeText={(text) => fetchMovies(text)}
        />
        <Octicons name='search' size={26} color={'#67686D'} />
      </Search>
    </SafeArea>
  );
};
