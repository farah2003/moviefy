import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons, Fontisto } from '@expo/vector-icons';
import { appTabsStyle } from './screenOptionStyle/index';
import { MoviesNavigator } from './movies.navigator';
import { MovieProvider } from '../hooks/context';
import { SearchScreen, WatchlistScreen } from '../features/screens/index';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <MovieProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={appTabsStyle}>
          <Tab.Screen
            name='Home'
            component={MoviesNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Octicons name='home' size={26} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name='Search'
            component={SearchScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Octicons name='search' size={26} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name='Watch List'
            component={WatchlistScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Fontisto name='favorite' size={26} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MovieProvider>
  );
};
