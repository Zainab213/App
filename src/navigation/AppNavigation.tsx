
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeDetail from '../screens/RecipesDetail';
import Login from '../auth/login';
import CreateNewAccount from '../auth/Create';
import Order from '../components/Buy';


type screens = {
  Home: undefined;
  Welcome: undefined;
  RecipeDetails: undefined;
  login: undefined,
  CreateNewAccount: undefined,
  Buy: undefined,
}

const Stack = createNativeStackNavigator<screens>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name='RecipeDetails' component={RecipeDetail} /> 
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='CreateNewAccount' component={CreateNewAccount}/>
      <Stack.Screen name='Buy' component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

