import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ShopScreen from '../screens/ShopScreen';
import DetailScreen from '../screens/DetailScreen';

const ShopNavigator = createStackNavigator({
    Shop: ShopScreen
});

export default createAppContainer(ShopNavigator);
