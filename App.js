import 'react-native-gesture-handler'; // Must be first
import 'react-native-reanimated';

import './global.css'
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/homescreen/HomeScreen';
import CheckoutCartScreen from './src/screens/CheckoutCart/CheckoutCart';
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen/CategoriesScreen"

import {NavigationContainer} from '@react-navigation/native';

export default function App() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName = "HomeScreen"
                screenOptions={{
                    headerShown: false,
                }}>

                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="CheckoutCartScreen" component={CheckoutCartScreen}/>
                <Stack.Screen name="SearchScreen" component={SearchScreen}/>
                <Stack.Screen name="CategoriesScreen" component={CategoriesScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}