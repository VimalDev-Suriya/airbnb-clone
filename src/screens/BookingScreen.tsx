import {Link} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

const BookingScreen = props => {
  const {navigation} = props;

  return (
    <View>
      <Text>Booking SCreen</Text>

      <Link to={{screen: 'Login'}}>Go to login</Link>
    </View>
  );
};

export default BookingScreen;
