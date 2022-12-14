import { useState, useEffect } from 'react';
import axios from 'axios';
import { ImageGrid } from './imageGrid';

export const Popular = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    let movies = [];
    const source = axios.CancelToken.source();
    const fetchMovies = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US&page=1',
          { cancelToken: source.token }
        );

        results.map(({ backdrop_path, id, original_title }) => {
          movies.push({ backdrop_path, id, original_title });
        });
        setData(movies);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovies();
    return () => source.cancel();
  }, []);

  return <ImageGrid data={data} navigation={navigation} />;
};
