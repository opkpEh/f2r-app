import 'react-native-gesture-handler'; // Must be first
import 'react-native-reanimated';

import './global.css'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/WelcomePage';

import { NavigationContainer } from '@react-navigation/native';
export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}