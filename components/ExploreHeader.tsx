import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const categories = [
    {
        name: 'Tiny houses',
        icon: 'home',
    },

    {
        name: 'Cabanes',
        icon: 'house-siding',
    },

    {
        name: 'Tendances',
        icon: 'local-fire-department',
    },
    {
        name: 'Espaces de jeu',
        icon: 'videogame-asset',
    },
    {
        name: 'En ville',
        icon: 'Appartement',
    },
    {
        name: 'Avec vue',
        icon: 'beach-access',
    },
    {
        name: 'Campagne',
        icon: 'nature-people',
    },
]

const ExploreHeader = () => {
  return (
    <SafeAreaView style={{flex : 1,  backgroundColor: '#fff'}}>
        <View style={styles.container}>
        <View style={styles.actionRow}>
            <Link href={'/(modals)/booking'}asChild> 
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name="search" size={24}/>
                    <View>
                        <Text style={{fontFamily: 'Mono'}}>Destination</Text>
                        <Text style={{fontFamily: 'Mono'}}>N'impo... • Une sem... • Ajouter des v...</Text>
                    </View>
                </TouchableOpacity>            
            </Link>
            <TouchableOpacity style={styles.filterBtn}>
                <Ionicons size={15} name="options-outline"/>
            </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height:130,
    },
    actionRow:  {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16
    },
    filterBtn : {
        padding:10,
        borderWidth:1,
        borderColor: 'gray',
        borderRadius: 24
    },
    searchBtn: {
        flexDirection:'row',

    } 
})
export default ExploreHeader;
