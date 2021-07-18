import React from 'react';
import {View} from 'react-native';
import { Container } from '../components';
import { Routes, StackNavigationProps } from '../components/Navigation';
import Footer from './components/Footer';

const ForgotPassword = ({navigation}: StackNavigationProps<Routes, 'ForgotPassword'>) => {
  
   const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate('SignUp')}
    />
  );
  return (
    <Container {...{footer}}/>)
export default ForgotPassword;
