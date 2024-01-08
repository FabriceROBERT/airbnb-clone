import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import useWarmUpBrowser from "@/hooks/useWarmUpBrowser";
import {defaultStyles} from 'constants/Styles';

const Page = () => {
useWarmUpBrowser()
  
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email'autoCapitalize="none" placeholderTextColor="gray" style={[defaultStyles.inputField, {marginBottom:30}]}/>
      <TouchableOpacity style={defaultStyles.btn}>
      <Text style={defaultStyles.btnText}>Connexion</Text>
      </TouchableOpacity>
      <View style={styles.seperatorView}>
        <View style={{
          flex: 1,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: 'black'
        }}/>
          <Text style={styles.seperator}>Ou </Text>
          <View style={{
          flex: 1,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: 'black'
        }}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    padding: 26
  },
  seperatorView: {
    flexDirection: 'row',
    gap:10
  },
  seperator: {
    // fontFamily: 'SpaceMono' Font à changer
    color: 'grey'
  }
})
export default Page;
