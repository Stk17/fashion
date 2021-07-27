import {Box} from '../../components';
import {HomeNavigationProps} from '../../components/Navigation';
import React from 'react';
import Notification from './Notification';
import ContentFooter from '../../components/Content';
import Header from '../../components/Header';
const Settings = ({navigation}: HomeNavigationProps<'Settings'>) => {
  return (
    <ContentFooter>
      <Box backgroundColor="background">
        <Header
          title="Settings"
          left={{
            icon: 'menu',
            onPress: () => navigation.openDrawer(),
          }}
          right={{
            icon: 'share',
            onPress: () => true,
          }}
        />
        <Box padding="m">
          <Notification
            title="Outfit Ideas"
            description="Receive daily notifications"
          />
          <Notification
            title="Discounts & Sales"
            description="Buy the stuff you love for loss"
          />
          <Notification
            title="Stock Notifications"
            description="If the product you comes back in stock"
          />
          <Notification
            title="New Stuff"
            description="Hear it first, wear it first"
          />
        </Box>
      </Box>
    </ContentFooter>
  );
};

export default Settings;
