import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/BottomTabScreens/HomeScreen';
import SettingScreen from '../screens/BottomTabScreens/SettingScreen';
import AboutScreen from '../screens/BottomTabScreens/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Routes:React.FC<{}> = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={
        ({route})=>({
            headerStyle: { backgroundColor: '#42f44b' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'black',
            labelStyle: [styles.labelStyle],
            tabStyle: [styles.tabContainer],
            style: [styles.tabBarContainer],
        })

        

        
    }
   
    >
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarLabel: 'Home',
        title: 'Home',

        tabBarIcon: ({ }) => {
            return (<Image 
                style={{ }}
                source={require('../assests/images/shopClicked.png')}/>);}
  
      }}
      />
      <Tab.Screen name="Setting" component={SettingScreen} 
      
      options={{
        tabBarLabel: 'Setting',
        title: 'Setting',
        tabBarIcon: ({ }) => {
            return (<Image 
                style={{ }}
                source={require('../assests/images/shopClicked.png')}/>);}
  
      }}

      
      />
      
     
     <Tab.Screen name="About" component={AboutScreen}
     
     options={{
        tabBarLabel: 'About',
        title: 'About',
        tabBarIcon: ({ }) => {
            return (<Image 
                style={{ }}
                source={require('../assests/images/shopClicked.png')}/>);}
  
      }}
    
      
     />
  </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Routes;
const styles = StyleSheet.create({
    tabBarContainer: {
      backgroundColor: '#f4f4f4',
      marginBottom: 45,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderColor: '#D5D5D5',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    tabContainer: {
      height: '40%',
    
    },
    labelStyle: {
      fontSize: 14,
    }
  });