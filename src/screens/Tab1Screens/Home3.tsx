import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const Home3:React.FC<{}> = (props:any) => {
    console.log("Screen Inside Homes:::::",props.route.key)
  
    return (
    <>
    <Text style={{color:'red',fontSize:18,fontWeight:'600'}}>
        Home Screen 13
    </Text>
    <TouchableOpacity onPress={()=>{props.navigation.navigate('Home2')}}>
 <Text style={{color:'green',margin:40,borderWidth:2,borderColor:'blue',backgroundColor:'black',fontSize:16}}>
    Go To  Back Screen
 </Text>
    </TouchableOpacity>
    </>
  )
}
