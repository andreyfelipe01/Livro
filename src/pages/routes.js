import React, {useState} from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Login from '../screens/Login'
import BookDescription from '../screens/BookDescription';


import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
      <Stack.Navigator

        screenOptions={{
          headerShown: false,
        }}>

        <Stack.Screen 
            name="Login" 
            component={Login}

        />
        <Stack.Screen 
            name="BookDescription" 
            component={BookDescription}

        />
  
      </Stack.Navigator>
    );
  }

export function Routes () {

    return(
        <Tab.Navigator

            screenOptions={{
                tabBarActiveTintColor:'white',
                tabBarShowLabel: true,
                headerShown: false,
                tabBarHideOnKeyboard: true,

                tabBarStyle:{
                    backgroundColor: '#0ca788',
                    paddingLeft:40,
                    paddingRight:40,
                    height:'9%',
                    alignItems:'center',
                }
                   
            }}
                    
        >
            <Tab.Screen
                name="BemVindo"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title:'Procurar',
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <FontAwesome name="search" size={24} color="white" />
                        }
                            return <FontAwesome name="search" size={24} color="black" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}