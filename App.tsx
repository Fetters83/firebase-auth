import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import useAuth from './hooks/useAuths';
import SignUpScreen from './components/SignUpScreen';
import AlreadyHaveAccount from './components/AlreadyHaveAccount';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';

const Stack = createNativeStackNavigator()
export default function App() {

  const {user} = useAuth()
 

  if(user){
    console.log("in if")
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='home' component={Home}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    
    );

  } else {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='signup'>
          <Stack.Screen name="signup" component={SignUpScreen}></Stack.Screen>
          <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
 
    )
 
  }
 
}

