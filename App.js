import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import WorkoutScreen from './src/Screens/WorkoutScreen';
import TimerScreen from './src/Screens/TimerScreen';
import CalculationScreen from './src/Screens/CalculationScreen';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  //funcao navigator

  function TabNavigator() {
    return (
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarHideOnKeyboard:true,
        tabBarIcon:({color, size})=>{
          let iconName;
          switch(route.name){
            case "Workout":
              iconName='dumbbell';
              return(<MaterialCommunityIcons name={iconName} size={size} color={color}/> );

              case "Timer":
              iconName='timer-outline';
              return(<Ionicons name={iconName} size={size} color={color}/> );

              case "Calculation":
              iconName='calculator-outline';
              return(<Ionicons name={iconName} size={size} color={color}/> );
          }
        },

        tabBarShowLabel:false,
        headerShown:false,

        tabBarStyle:{
          backgroundColor:'black',
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          paddingVertical:5,
        },
        tabBarActiveTintColor:'aqua',
        tabBarInactiveTintColor:'gray',
      })}
      >
        <Tab.Screen name="Workout" component={WorkoutScreen} />
        <Tab.Screen name="Timer" component={TimerScreen} />
        <Tab.Screen name="Calculation" component={CalculationScreen} />

      </Tab.Navigator>
    )
  }
  return (//className="flex-1 items-center justify-center bg-gray-600"
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='TabNav' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
