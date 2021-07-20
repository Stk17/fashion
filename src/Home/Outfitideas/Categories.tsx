import Category from './Category';
import React from 'react';
import {ScrollView, View} from 'react-native';
const categories = [
  {
    id: 'newin',
    title: 'New In',
    color: '#FFDDDD',
  },
  {
    id: 'summer',
    title: 'Summer',
    color: '#BEECC4',
  },
  {
    id: 'activewear',
    title: 'Active Wear',
    color: '#BFEA5',
  },
  {
    id: 'outlet',
    title: 'Outlet',
    color: '#FFE8E9',
  },
  {
    id: 'accesories',
    title: 'Accesories',
    color: '#FFE8E9',
  },
  {
    id: 'accesories',
    title: 'Accesories',
    color: '#FFE8E9',
  },
];

const Categories = () => {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
