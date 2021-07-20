import DrawerItem, {DrawerItemProps} from './DrawerItem';
import React from 'react';
import {Dimensions, Image} from 'react-native';
import {Box, useTheme, Text, Header} from '../../components';

import {DrawerActions, useNavigation} from '@react-navigation/native';

export const assets = [require('../../../assets/drawer.png')];
const {width} = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;
const items: DrawerItemProps[] = [
  {
    icon: 'flash',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'primary',
  },
  {
    icon: 'heart',
    label: 'Favorite Outfits',
    screen: 'FavoriteOutfits',
    color: 'orange',
  },
  {
    icon: 'user',
    label: 'Edit Profile',
    screen: 'EditProfile',
    color: 'yellow',
  },
  {
    icon: 'clock',
    label: 'Transaction History',
    screen: 'TransactionHistory',
    color: 'pink',
  },
  {
    icon: 'settings',
    label: 'Notification Settings',
    screen: 'NotificationSettings',
    color: 'violet',
  },
  {
    icon: 'log-out',
    label: 'Logout',
    screen: 'Logout',
    color: 'secondary',
  },
];
const Drawer = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary">
          <Header
            title="Menu"
            left={{icon: 'x', onPress: () => true}}
            right={{
              icon: 'shopping-bag',
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        />

        <Box marginVertical="m">
          <Text variant="title1" textAlign="center">
            Mike Peter
          </Text>
          <Text variant="body" textAlign="center">
            mike@.com
          </Text>
        </Box>

        {items.map(item => (
          <DrawerItem key={item.screen} {...item} />
        ))}
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.61}>
        <Image
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
