import React from 'react';
import { 
  View, 
  Text, 
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home() {
  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <LinearGradient
        colors={['#0f0f0f', '#000000', '#050505']}
        className="flex-1"
      >
   
        <View className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-500 opacity-10" 
              style={{ transform: [{ translateX: 40 }, { translateY: -20 }] }} />
        <View className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-500 opacity-10" 
              style={{ transform: [{ translateX: -40 }, { translateY: 40 }] }} />
              

        <View className="flex-1 justify-center items-center p-8">
     
          <View className="items-center mb-16">
            <View className="h-20 w-20 bg-white rounded-2xl items-center justify-center mb-4">
              <View className="h-12 w-12 bg-black rounded-lg items-center justify-center">
                <Text className="text-white font-bold text-lg">E</Text>
              </View>
            </View>
            <Text className="text-white font-bold text-3xl tracking-wider">SIDDHARTH<Text className="text-gray-400">UI</Text></Text>
          </View>
          
        
          <View className="items-center mb-12">
            <Text className="text-white font-bold text-5xl mb-2 text-center">Beautiful</Text>
            <Text className="text-white font-bold text-5xl mb-8 text-center">Experiences</Text>
            <Text className="text-gray-400 text-center text-lg leading-7 max-w-xs">
              Create stunning interfaces with our premium design system
            </Text>
          </View>
          
          
          <View className="bg-white h-16 w-64 rounded-full items-center justify-center mb-16">
            <Text className="font-bold text-black text-lg">Get Started</Text>
          </View>
          
          
          <View className="flex-row mb-8">
            <View className="h-1 w-1 bg-gray-600 rounded-full mx-1" />
            <View className="h-1 w-1 bg-gray-600 rounded-full mx-1" />
            <View className="h-1 w-12 bg-white rounded-full mx-1" />
            <View className="h-1 w-1 bg-gray-600 rounded-full mx-1" />
            <View className="h-1 w-1 bg-gray-600 rounded-full mx-1" />
          </View>
          
          
          <View className="flex-row">
            <View className="h-8 w-8 bg-purple-500 rounded-md opacity-60 mr-3" />
            <View className="h-8 w-8 bg-blue-500 rounded-md opacity-60 mr-3" />
            <View className="h-8 w-8 bg-teal-500 rounded-md opacity-60" />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}