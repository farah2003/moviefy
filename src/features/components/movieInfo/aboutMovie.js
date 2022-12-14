import axios from 'axios';
import { useState, useEffect } from 'react';
import { AboutMovieView, OverView } from '../../../components/index';

export const Overview = () => {
  const [overview, setOverview] = useState('');
  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchDetails = async () => {
      let id = 5653;
      try {
        const {
          data: { overview },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US`,
          { cancelToken: source.token }
        );
        setOverview(overview);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDetails();
  }, []);

  return (
    <AboutMovieView>
      <OverView>{overview}</OverView>
    </AboutMovieView>
  );
};
