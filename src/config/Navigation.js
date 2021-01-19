
import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../pages/Login'
import RegistrationPage1 from '../pages/RegistrationPage1'
import RegistrationPage2 from '../pages/RegistrationPage2'
import RegistrationPage3 from '../pages/RegistrationPage3'
import RegistrationPage4 from '../pages/RegistrationPage4'

const Stack = createStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{
                        title: 'Login',
                        headerStyle: {
                          backgroundColor: '#9FE5FF',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}

                />

                <Stack.Screen 
                    name="Registration" 
                    component={RegistrationPage1} 
                    options={{
                        title: 'RegistrationPage1',
                        headerStyle: {
                          backgroundColor: '#9FE5FF',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}

                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
