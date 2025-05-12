import { View, Text } from 'react-native'
import React from 'react'
import ExerceseItems from './ExerceseItems'

const Exercise = () => {
  return (
    <View>
     <View className="flex-row items-center justify-between mx-10 mb-3">
        <Text className="text-xl font-bold">Exercícios</Text>
       
     </View>
     <ExerceseItems />
    </View> 
  )
}

export default Exercise