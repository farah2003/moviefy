import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { HomeScreen } from './src/features/movies/screens';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#0296E5',
          tabBarIconStyle: {
            color: '#67686D',
            fontSize: 24,
          },
          tabBarStyle: {
            backgroundColor: '#242A32',
            height: 60,
            paddingBottom: 7,
          },
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({ color, size }) => (
              <Octicons name='home' size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Search'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name='search' size={26} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name='Watch List'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Fontisto name='favorite' size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
