import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Home1:React.FC<{}> = (props:any) => {
   console.log("Screen Inside Homes:::::",props.route.name)

  return (
    <>
    <Text style={{color:'red',fontSize:18,fontWeight:'600'}}>
        Home Screen 11
    </Text>
    <TouchableOpacity onPress={()=>{props.navigation.navigate('Home2')}}>
 <Text style={{color:'green',margin:40,borderWidth:2,borderColor:'blue',backgroundColor:'black',fontSize:16}}>
    Go To Second Screen inside Home
 </Text>
    </TouchableOpacity>
    </>
  )
}
