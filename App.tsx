/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ExploreStackScreen from './src/screens/ExploreStackScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import TripsScreen from './src/screens/TripsScreen';
import InboxScreen from './src/screens/InboxScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {colors, fonts} from './src/constants';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// * Implementing the stack screen within the TAB screen
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarLabelStyle: {
              fontFamily: fonts.Bold,
            },
          }}>
          <Tab.Screen
            name="Explore"
            component={ExploreStackScreen}
            options={{
              tabBarLabel: 'Explore',
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <SimpleLineIcons name="magnifier" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Wishlist"
            component={WishlistScreen}
            options={{
              tabBarLabel: 'Wishlist',
              tabBarIcon: ({color, size}) => (
                <SimpleLineIcons name="heart" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Trips"
            component={TripsScreen}
            options={{
              tabBarLabel: 'Trips',
              tabBarIcon: ({color, size}) => (
                <SimpleLineIcons name="globe" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Inbox"
            component={InboxScreen}
            options={{
              tabBarLabel: 'Inbox',
              tabBarIcon: ({color, size}) => (
                <SimpleLineIcons name="envelope" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}) => (
                <SimpleLineIcons name="user" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
