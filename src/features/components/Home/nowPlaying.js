import { useState, useEffect } from 'react';
import axios from 'axios';
import { ActivityIndicator, Text } from 'react-native';
import { ImageGrid } from './imageGrid';

export const NowPlaying = ({ navigation }) => {
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
          'https://api.themoviedb.org/3/movie/now_playing?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US&page=1',
          { cancelToken: source.token }
        );
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
        <ActivityIndicator size='large' color='#FFFF' />
      ) : (
        <>
          {error ? (
            <Text>fhgh</Text>
          ) : (
            <ImageGrid data={data} navigation={navigation} />
          )}
        </>
      )}
    </>
  );
};
