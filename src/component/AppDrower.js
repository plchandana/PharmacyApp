import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrugPage from '../screens/DrugPage';
import SupplierPage from '../screens/SupplierPage';
import Service from '../screens/Service';
const Drawer = createDrawerNavigator();
export default function AppDrower() {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Service" component={Service} />
    <Drawer.Screen name="Drug" component={DrugPage} />
    <Drawer.Screen name="Suppliar" component={SupplierPage} />
  </Drawer.Navigator>
  )
}