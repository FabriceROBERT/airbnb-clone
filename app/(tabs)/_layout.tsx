import React from "react";
import { Tabs } from "expo-router";
// import Colors from "@/constants/Colors";
import Colors from "../../constants/Colors";
import {FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";


const Layout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: Colors.primary,
    tabBarLabelStyle: {
      // fontFamily:'RobotoMono',
    }}}>
        <Tabs.Screen name="index" options={{tabBarLabel:'Explorer', tabBarIcon: ({ color, size}) => <Ionicons name="search" color={color} size={size} />}} />

               <Tabs.Screen  name="trips" options={{tabBarLabel:'Favoris', tabBarIcon: ({ color, size}) => <Ionicons name="heart-outline" color={color} size={size} />}}/>

               <Tabs.Screen  name="wishlists" options={{tabBarLabel:'Voyages', tabBarIcon: ({ color, size}) => <FontAwesome5 name="airbnb" color={color} size={size} />}}/>

               <Tabs.Screen  name="inbox" options={{tabBarLabel:'Messages', tabBarIcon: ({ color, size}) => <MaterialCommunityIcons name="message-outline" color={color} size={size} />}}/>

               <Tabs.Screen  name="profile" options={{tabBarLabel:'Profil', tabBarIcon: ({ color, size}) => <Ionicons name="person-circle-outline" color={color} size={size} />}}/>
               
    </Tabs>

    

  );
};

export default Layout;
