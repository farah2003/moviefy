import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MoiveContext } from '../../../hooks/context';
import { Theme } from '../../../theme';
import { detailsApi } from '../../../api';
import { AboutMovieView, OverView } from '../../../components/index';
import { Text, ActivityIndicator } from 'react-native';

export const Overview = () => {
  const { movieId } = useContext(MoiveContext);
  const [overview, setOverview] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchDetails = async () => {
      let api = detailsApi(movieId);
      try {
        const {
          data: { overview },
        } = await axios.get(api, { cancelToken: source.token });
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
        <ActivityIndicator size='large' color={Theme.color.primary} />
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
