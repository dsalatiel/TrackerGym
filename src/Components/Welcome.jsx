import { View, Text } from 'react-native';
import React from 'react';
import {
    useFonts,
    Caveat_400Regular,
    Caveat_500Medium,
    Caveat_600SemiBold,
    Caveat_700Bold,
} from '@expo-google-fonts/caveat';

const Welcome = () => {

    let [fontsLoaded] = useFonts({
        Caveat_400Regular, 
        Caveat_500Medium, 
        Caveat_600SemiBold, 
        Caveat_700Bold
      });
    if (!fontsLoaded) {
        return null
    }
    return (
        <View>
            <Text style={{
                fontFamily: "Caveat_700Bold",
                fontSize: 35,
                textAlign: "center",
                color: "#92400e",
            }}>Bem-vindo</Text>
        </View>
    )
}

export default Welcome