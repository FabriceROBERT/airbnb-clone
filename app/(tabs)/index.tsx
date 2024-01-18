import React from "react";
import { Link, Stack, Tabs, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import ExploreHeader from "@/components/ExploreHeader";
import Listing from "@/components/Listing";

const Page = () => {


  
  return (
 <View style={{flex:1}}>
 <Stack.Screen options={{
  header: () => <ExploreHeader/>
 }} />
 <Listing/>

 
 </View>
  );
};

export default Page;
