import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CastImage, CastContainer, Container } from '../../../components/index';
import { imageBaseUrl, movieInformationApi } from '../../../api';
import { FlatList, Text, ActivityIndicator } from 'react-native';
import { MoiveContext } from '../../../hooks/context';
import { Theme } from '../../../theme';

export const Cast = () => {
  const { movieId } = useContext(MoiveContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchCast = async () => {
      let api = movieInformationApi(movieId, 'credits');
      try {
        const {
          data: { cast },
        } = await axios.get(api);
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
