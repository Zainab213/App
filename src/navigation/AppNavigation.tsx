
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../auth/login';
import CreateNewAccount from '../auth/Create';
import Order from '../components/Buy';
import RecipeDetail from '../screens/RecipesDetail';


export type RootStackParamList = {
 
  Home: undefined;
  Welcome: undefined;
  login: undefined,
  CreateNewAccount: undefined,
  Buy: {ingredients: string[]};
  RecipeDetails: { idMeal: string; strMeal: string; strMealThumb: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();


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

