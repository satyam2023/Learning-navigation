import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Home1 } from '../Tab1Screens/Home1';
import { Home3 } from '../Tab1Screens/Home3';
import { Home2 } from '../Tab1Screens/Home2';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();


const HomeScreen = ({navigation,route}:any) => {
 const [currentScreen,setCurrentScreen]=useState<string>('')


    function handleHide(){

        if(route.name=="About"){
            navigation.setOptions({tabBarVisible: false});
            console.log("hello ia m aher::")
        }
    }
  
    React.useEffect(
        handleHide
    , [navigation]);

  return (
<Stack.Navigator 

>
<Stack.Screen name="Home1" component={Home1} options={{ headerShown: false }} />
<Stack.Screen name="Home2" component={Home2} options={{ headerShown: false }}/>
<Stack.Screen name="Home3" component={Home3} options={{ headerShown: false }}/>
</Stack.Navigator>
  )
}

export default HomeScreen;