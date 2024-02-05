import React from 'react'
import { ScrollView, Text } from 'react-native'

const AboutScreen:React.FC<{}> = () => {
  return (
    <ScrollView style={{display:'flex'}}>
  <Text style={{alignSelf:'center',justifyContent:'center',color:'red',fontSize:18,fontWeight:'700'}}>
    AboutScreen
  </Text>
    </ScrollView>
  )
}

export default AboutScreen;