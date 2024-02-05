import React from 'react'
import { ScrollView, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting1 from '../Tab2Screens/Setting1';
import Setting2 from '../Tab2Screens/Setting2';
import Setting3 from '../Tab2Screens/Setting3';

const Drawer = createDrawerNavigator();
const SettingScreen:React.FC<{}> = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Setting1" component={Setting1} />
    <Drawer.Screen name="Setting2" component={Setting2} />
    <Drawer.Screen name="Setting3" component={Setting3} />
  </Drawer.Navigator>
  )
}

export default SettingScreen;