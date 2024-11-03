/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import BookingScreen from './BookingScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ExploreScreen from './ExploreScreen';
import DetailsScreen from './DetailsScreen';

// * Modal will be working on the only the Stack not the native stack
const Stack = createStackNavigator();

const ExploreStackScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />

      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: 'Login or Sign up',
            headerLeft: () => (
              <TouchableHighlight onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={30} />
              </TouchableHighlight>
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ExploreStackScreen;
