import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const Home2:React.FC<{}> = (props:any) => {
    console.log("Screen Inside Homes:::::",props.route.name)

  return (
    <>
    <Text style={{color:'red',fontSize:18,fontWeight:'600'}}>
        Home Screen 12
    </Text>

    <TouchableOpacity onPress={()=>{props.navigation.navigate('Home3')}}>
 <Text style={{color:'green',margin:40,borderWidth:2,borderColor:'blue',backgroundColor:'black',fontSize:16}}>
    Go To Third Screen inside Home
 </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{props.navigation.navigate('Home1')}}>
 <Text style={{color:'green',margin:40,borderWidth:2,borderColor:'blue',backgroundColor:'black',fontSize:16}}>
    Go To  Back Screen
 </Text>
    </TouchableOpacity>

    </>
  )
}
