import {createDrawerNavigator} from '@react-navigation/drawer';

import OutfitIdeas from './Outfitideas';
import {HomeRoutes} from '../components/Navigation';
const Drawer = createDrawerNavigator();
export const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);
