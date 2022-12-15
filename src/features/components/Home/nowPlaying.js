import { useState, useEffect } from 'react';
import axios from 'axios';
import { ActivityIndicator, Text } from 'react-native';
import { ImageGrid } from './imageGrid';
import { Theme } from '../../../theme';
import { moviesTypeApi } from '../../../api';

export const NowPlaying = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let movies = [];
    const source = axios.CancelToken.source();
    const fetchMovies = async () => {
      let api = moviesTypeApi('now_playing');
      try {
        const {
          data: { results },
        } = await axios.get(api, { cancelToken: source.token });
        results.map(({ backdrop_path, id, original_title }) => {
          movies.push({ backdrop_path, id, original_title });
        });
        setData(movies);
        setError(false);
        setLoading(false);
      } catch (e) {
        setData([]);
        setLoading(false);
        setError(ture);
      }
    };
    fetchMovies();
    return () => source.cancel();
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator size='large' color={Theme.color.primary} />
      ) : (
        <>
          {error ? (
            <Text>Error</Text>
          ) : (
            <ImageGrid data={data} navigation={navigation} />
          )}
        </>
      )}
    </>
  );
};
