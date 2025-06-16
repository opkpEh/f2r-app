import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './src/screens/homescreen/HomeScreen';
import CheckoutCartScreen from './src/screens/CheckoutCart/CheckoutCart';
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen/CategoriesScreen";
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import OrderScreen from './src/screens/OrderScreen/OrderScreen';
import AddressScreen from './src/screens/AddressScreen/AddressScreen';
import HelpSupportScreen from './src/screens/HelpSupportScreen/HelpSupportScreen';
import AboutUsScreen from './src/screens/AboutUsScreen/AboutUsScreen';
import ShopScreen from './src/screens/ShopScreen/ShopScreen';
import WishlistScreen from './src/screens/WishlistScreen/WishlistScreen';
import LoginPageScreen from './src/screens/LoginPageScreen/LoginPageScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Categories') iconName = 'grid-outline';
          else if (route.name === 'Wishlist') iconName = 'bag-outline';
          else if (route.name == 'Shop') iconName='cart-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#21897E',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, 
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="CheckoutCartScreen" component={CheckoutCartScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="AddressScreen" component={AddressScreen} />
        <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        <Stack.Screen name='LoginPageScreen' component={LoginPageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
