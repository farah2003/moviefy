import { useState, useEffect } from 'react';
import axios from 'axios';
import { CastImage, CastContainer, Container } from '../../../components/index';

import { FlatList, Text } from 'react-native';
export const Cast = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchCast = async () => {
      let id = 5653;
      try {
        const {
          data: { cast },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/5653/credits?api_key=bf42acf712bba686cfff9820897f4edb&language=en-US`
        );
        setData(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
    return () => source.cancel();
  }, []);
  const Item = ({ src, name }) => (
    <CastContainer>
      <CastImage
        source={{
          uri: src,
        }}
      />
      <Text style={{ color: '#ffff' }}>{name}</Text>
    </CastContainer>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        name={item.name}
        src={`https://image.tmdb.org/t/p/original${item.profile_path} `}
      />
    );
  };

  return (
    <Container>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};
