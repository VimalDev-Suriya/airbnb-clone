import {useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';

const DetailsScreen = () => {
  const {params} = useRoute();
  return (
    <View>
      <Text>Details Screen {params?.id}</Text>
    </View>
  );
};

export default DetailsScreen;
