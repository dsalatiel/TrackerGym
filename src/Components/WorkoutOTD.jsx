import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import {useFonts,
  Lato_100Thin, 
  Lato_100Thin_Italic, 
  Lato_300Light, 
  Lato_300Light_Italic, 
  Lato_400Regular, 
  Lato_400Regular_Italic, 
  Lato_700Bold, 
  Lato_700Bold_Italic, 
  Lato_900Black, 
  Lato_900Black_Italic
} from '@expo-google-fonts/lato'



const odtImage =require('../../assets/images/workoutotd.jpg')

const WorkoutOTD = () => {

  let [fontsLoaded] = useFonts({
    Lato_100Thin, 
    Lato_100Thin_Italic, 
    Lato_300Light, 
    Lato_300Light_Italic, 
    Lato_400Regular, 
    Lato_400Regular_Italic, 
    Lato_700Bold, 
    Lato_700Bold_Italic, 
    Lato_900Black, 
    Lato_900Black_Italic
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableOpacity className="items-center justify-center">
      <View className="rounded-s-3xl overflow-hidden h-40 w-[80%]">
        <ImageBackground
        source={odtImage}
        className="flex-1 justify-center items-center"
        resizeMethod='cover'
        >
          <View>
            <Text className="text-white/70 text-3xl tracking-tighter"
            style={{fontFamily: "Lato_400Regular"}}
            >Treino do Dia</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

export default WorkoutOTD