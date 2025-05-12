import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const iniciante = require('../../assets/images/w_3.png')
const equilibrio = require('../../assets/images/uper_legs.png')
const suave = require('../../assets/images/cardio.png')
const itenso = require('../../assets/images/chest.png')
const moderado = require('../../assets/images/lower_arms.png')
const forte = require('../../assets/images/back.png')
const tonificacao = require('../../assets/images/w_2.png')

const workoutData = [
    { id: 1, imageSource: equilibrio, numberOfExercises: 9, title: 'Balance' },
    { id: 2, imageSource: iniciante, numberOfExercises: 7, title: 'Iniciante' },
    { id: 3, imageSource: suave, numberOfExercises: 5, title: 'Suave' },
    { id: 4, imageSource: itenso, numberOfExercises: 8, title: 'Itenso' },
    { id: 5, imageSource: moderado, numberOfExercises: 23, title: 'Moderado' },
    { id: 6, imageSource: forte, numberOfExercises: 11, title: 'Forte' },
    { id: 7, imageSource: tonificacao, numberOfExercises: 10, title: 'Tonificacao' },
]

const CategoryItems = () => {

    const renderWorkoutItem = ({ item }) => (
        <TouchableOpacity>
            <ImageBackground
                source={item.imageSource}
                className="h-36 w-40 rounded-2xl overflow-hidden mx-2 bg-neutral-900"
            >
                <View className="flex-1 justify-between m-3">
                    <View className="flex-row items-center space-x-1">
                        <FontAwesome5 name="dumbbell" size={15} color="white" />

                        <Text className="text-white font-bold tracking-widest">{item.numberOfExercises}</Text>
                    </View>
                    <Text className="text-white font-medium tracking-widest">{item.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )

    return (
        <View>
            <FlatList
                data={workoutData}
                renderItem={renderWorkoutItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default CategoryItems