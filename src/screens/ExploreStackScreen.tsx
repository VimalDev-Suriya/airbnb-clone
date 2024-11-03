/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import BookingScreen from './BookingScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// * Modal will be working on the only the Stack not the native stack
const Stack = createStackNavigator();

const ExploreStackScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Booking"
        component={BookingScreen}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: 'Login or Sign up',

            headerLeft: props => {
              console.log(props);
              return (
                <TouchableHighlight onPress={() => navigation.goBack()}>
                  <AntDesign name="close" size={30} />
                </TouchableHighlight>
              );
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ExploreStackScreen;
