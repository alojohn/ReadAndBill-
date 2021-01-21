import React, {Component,Fragment, useState,useEffect} from 'react';
import {  Button, Text,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login  from "./Component/Login";
import  Dashboard  from "./Component/Dashboard";
import HomePage from './Component/Home';


const Stack = createStackNavigator();

  export default class Route extends Component {
  


  render (){
  return (
    <NavigationContainer>
          {/* Rest of your app code */}
          {/* initialRouteName={Home} */}
          <Stack.Navigator initialRouteName={'Home'} >
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ title: 'Home' }}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

}

