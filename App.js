/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput
} from 'react-native';
import axios from 'axios'
import MapScreen from './component/screens/MapScreen'
import Home from './component/screens/Home'
import CountryPage from './component/screens/CountryPage'
import CountryDashboard from './component/screens/CountryDashboard'
import InfoPage from './component/screens/InfoPage'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//import Icon from 'react-native-vector-icons/MaterialIcons'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import { Container, Header, Left, Body, Right, Button, Title,Icon } from 'native-base';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
class App extends React.Component{
  
  render()
  {
    
    console.disableYellowBox = true;
    createCountryStack = ()=>
    <Stack.Navigator initialRouteName='Home'
    screenOptions={{
      gestureEnabled: true}}>
      <Stack.Screen name="Country" component={CountryPage} />
      <Stack.Screen name="CountryDashboard" component={CountryDashboard}  />
 
    </Stack.Navigator>
    return(
      <Container style={{backgroundColor:'white'}}>
     
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-home'
                : 'md-home';
            } else if (route.name === ' Covid Map') {
              iconName = focused ? 'md-globe' : 'md-globe';
            }else if (route.name === ' Countries') {
              iconName = focused ? 'md-star' : 'md-star-outline';
            }else if (route.name === 'Information') {
              iconName = focused ? 'md-information-circle-outline' : 'md-information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0080ff',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name=" Covid Map" component={MapScreen}   />
        <Tab.Screen name=" Countries" children={createCountryStack} />
        <Tab.Screen name="Information" component={InfoPage} />
      </Tab.Navigator>

     
    </NavigationContainer>
    </Container>
    )
  }
}
const styles = StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
}
});

export default App;
