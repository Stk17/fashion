import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {Box, Text} from '../../components';
import TextInput from '../../components/Form/TextInput';

import CheckboxGroup from './CheckboxGroup';

const genders = [
  {value: 'male', label: 'Male'},
  {value: 'female', label: 'Female'},
];

const PersonalInfo = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body" marginBottom="m">
          Account Information
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="user"
            placeholder="Name"
            autoCompleteType="name"
            autoCapitalize="none"
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Enter your Password"
            autoCompleteType="password"
            autoCapitalize="none"
            secureTextEntry
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="map-pin"
            placeholder="Address"
            autoCompleteType="street-address"
            autoCapitalize="none"
          />
        </Box>
        <CheckboxGroup options={genders} radio />
      </Box>
    </ScrollView>
  );
};

export default PersonalInfo;
