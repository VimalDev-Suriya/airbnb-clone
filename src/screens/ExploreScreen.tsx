import {Link} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

const ExploreScreen = props => {
  const {navigation} = props;
  console.log(navigation);

  return (
    <View>
      <Text>Explore SCreen</Text>

      <Link to={{screen: 'Login'}}>Go to login</Link>
      <Link to={{screen: 'Details', params: {id: 2}}}>Go to Details</Link>
    </View>
  );
};

export default ExploreScreen;
