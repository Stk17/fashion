import React from 'react';
import CardLayout from './CardLayout';
import {Box} from '../../components';
import {Icon} from 'react-native-vector-icons/Icon';
const AddCard = () => {
  return (
    <CardLayout onPress={() => true} backgroundColor="background">
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        borderRadius="m"
        style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
        <Icon name="plus" color="white" size={32} />
      </Box>
    </CardLayout>
  );
};

export default AddCard;
