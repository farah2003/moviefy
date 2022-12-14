import { useState } from 'react';

import { MoiveContext } from './movieContext';

export const MovieProvider = ({ children }) => {
  const [movieId, setMovieId] = useState();
  return (
    <MoiveContext.Provider value={{ movieId, setMovieId }}>
      {children}
    </MoiveContext.Provider>
  );
};
