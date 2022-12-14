import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Cast, Overview, Reviews } from '../features/components';
import { tabsStyle } from './screenOptionStyle/index';

const Tab = createMaterialTopTabNavigator();

export const MovieInfoNavigtor = () => {
  return (
    <Tab.Navigator screenOptions={tabsStyle}>
      <Tab.Screen
        options={{ tabBarLabel: 'About Movie' }}
        name='About Movie'
        component={Overview}
      />
      <Tab.Screen
        name='Reviews'
        options={{ tabBarLabel: 'Reviews' }}
        component={Reviews}
      />
      <Tab.Screen
        name='Cast'
        options={{ tabBarLabel: 'Cast' }}
        component={Cast}
      />
    </Tab.Navigator>
  );
};
