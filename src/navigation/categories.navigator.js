import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { tabsStyle } from './screenOptionStyle/index';
import {
  Popular,
  UpComing,
  NowPlaying,
  TopRated,
} from '../features/components';

const Tab = createMaterialTopTabNavigator();
export const CategoriesNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabsStyle}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Now Playing',
        }}
        name='now_playing'
        component={NowPlaying}
      />
      <Tab.Screen
        name='upcoming'
        options={{ tabBarLabel: 'Upcoming' }}
        component={UpComing}
      />
      <Tab.Screen
        name='top_rated'
        options={{ tabBarLabel: 'Top rated' }}
        component={TopRated}
      />
      <Tab.Screen
        name='pouplar'
        options={{ tabBarLabel: 'Popular' }}
        component={Popular}
      />
    </Tab.Navigator>
  );
};
