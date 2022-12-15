import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CastImage, CastContainer, Container } from '../../../components/index';
import { MoiveContext } from '../../../hooks/context';
import { FlatList, Text, ActivityIndicator } from 'react-native';
import { Theme } from '../../../theme';
import { imageBaseUrl } from '../../../api';

export const Cast = () => {
  const { movieId } = useContext(MoiveContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchCast = async () => {
      try {
        const {
          data: { cast },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bf42acf712bba686cfff9820897f4edb&language=en-US`
        );
        setData(cast);
        setError(false);
        setLoading(false);
      } catch (e) {
        setData([]);
        setLoading(false);
        setError(ture);
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
      <Text style={{ color: Theme.color.primary }}>{name}</Text>
    </CastContainer>
  );

  const renderItem = ({ item }) => {
    return (
      <Item name={item.name} src={`${imageBaseUrl}${item.profile_path} `} />
    );
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size='large' color={Theme.color.primary} />
      ) : (
        <>
          {error ? (
            <Text>fhgh</Text>
          ) : (
            <Container>
              <FlatList
                numColumns={2}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </Container>
          )}
        </>
      )}
    </>
  );
};
