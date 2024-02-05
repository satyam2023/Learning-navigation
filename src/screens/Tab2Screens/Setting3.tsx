import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Setting3 = (props:any) => {
  return (
    <>
    <Text style={{color:'red',fontSize:18,fontWeight:'600'}}>
        Setting Screen 23
    </Text>
    <TouchableOpacity onPress={()=>{props.navigation.navigate('Home2')}}>
 <Text style={{color:'green',margin:40,borderWidth:2,borderColor:'blue',backgroundColor:'black',fontSize:16}}>
    Go To Second Screen inside Home
 </Text>
    </TouchableOpacity>
    </>
  )
}

export default Setting3;