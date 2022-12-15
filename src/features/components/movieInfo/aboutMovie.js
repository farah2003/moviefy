import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AboutMovieView, OverView } from '../../../components/index';
import { Text, ActivityIndicator } from 'react-native';
import { MoiveContext } from '../../../hooks/context';
export const Overview = () => {
  const { movieId } = useContext(MoiveContext);
  const [overview, setOverview] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchDetails = async () => {
      try {
        const {
          data: { overview },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US`,
          { cancelToken: source.token }
        );
        setOverview(overview);
        setError(false);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(ture);
        setOverview([]);
      }
    };
    fetchDetails();
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator size='large' color='#FFFF' />
      ) : (
        <>
          {error ? (
            <Text>Error try again later</Text>
          ) : (
            <AboutMovieView>
              <OverView>{overview}</OverView>
            </AboutMovieView>
          )}
        </>
      )}
    </>
  );
};
