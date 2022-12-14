import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, MovieDetails } from '../features/screens/index';

const MovieStack = createStackNavigator();

export const MoviesNavigator = () => {
  return (
    <MovieStack.Navigator headerMode='none'>
      <MovieStack.Screen name='Movies' component={HomeScreen} />
      <MovieStack.Screen name='MovieDeatails' component={MovieDetails} />
    </MovieStack.Navigator>
  );
};
