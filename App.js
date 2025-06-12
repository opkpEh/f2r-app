import 'react-native-gesture-handler'; // Must be first
import 'react-native-reanimated';

import './global.css'
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/homescreen/HomeScreen';
import CheckoutCartScreen from './src/screens/CheckoutCart/CheckoutCart';

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

            </Stack.Navigator>
        </NavigationContainer>
    );
}