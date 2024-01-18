import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import {defaultStyles} from 'constants/Styles';
import { Ionicons } from "@expo/vector-icons";
// import { useOAuth } from "@clerk/clerk-expo";
import { useAuth0 } from "react-native-auth0";
  import { useRouter } from "expo-router";
import useWarmUpBrowser from "../../hooks/useWarmUpBrowser";

enum Strategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple',
  Facebook = 'oauth_facebook'
}

const Page = () => {
  // useWarmUpBrowser()
  const router = useRouter()
// const {startOAuthFlow: appleAuth} = useOAuth({strategy: 'oauth_apple'})
// const {startOAuthFlow: googleAuth} = useOAuth({strategy: 'oauth_google'})
// const {startOAuthFlow: facebookAuth} = useOAuth({strategy: 'oauth_facebook'})

  const {authorize} = useAuth0();

  const onPress = async () => {
      try {
          await authorize();
      } catch (e) {
          console.log(e);
      }
  }

// const onSelectAuth = async (strategy: Strategy) => {
//   const selectedAuth = {
//     [Strategy.Google]: googleAuth,
//     [Strategy.Apple]: appleAuth,
//     [Strategy.Facebook]: facebookAuth,
//   }[strategy];

//   try {
//     const {createdSessionId, setActive } = await selectedAuth()
//     console.log('Authentication result:', createdSessionId);

    

//     if(createdSessionId) {
//       setActive!({session: createdSessionId});
//       router.back();
//     }  else {
//       console.log('no createdSession');
      
//     }
//   }catch (err) {
//       console.error('OAuth erreur:', err);      
//     }

// }
   
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email'autoCapitalize="none" placeholderTextColor="gray" style={[defaultStyles.inputField, {marginBottom:30}]}/>
      <TouchableOpacity style={defaultStyles.btn}>
      <Text style={defaultStyles.btnText}>Continuer</Text>
      </TouchableOpacity>
      <View style={styles.seperatorView}>
        <View style={{
          flex: 1,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: 'black'
        }}/>
          <Text style={styles.seperator}>ou </Text>
          <View style={{
          flex: 1,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: 'black'
        }}/>
      </View>

        <View style={{gap:20}}>
          <TouchableOpacity style={styles.btnOutline}>
            <Ionicons name="phone-portrait-outline" size={24} style={defaultStyles.btnIcon} />
            <Text  numberOfLines={1} ellipsizeMode="tail" style={[styles.btnOutlineText, {marginLeft: 30}]}>Continuer avec le numéro de téléphone</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Apple)}>
            <Ionicons name="md-logo-apple" size={24} style={defaultStyles.btnIcon} />
            <Text style={styles.btnOutlineText}>Continuer avec Apple </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Google)}>
            <Ionicons name="md-logo-google" size={24} style={defaultStyles.btnIcon} />
            <Text style={styles.btnOutlineText}>Continuer avec Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Facebook)}>
            <Ionicons name="md-logo-facebook" size={24} style={defaultStyles.btnIcon} />
            <Text style={styles.btnOutlineText}>Continuer avec Facebook</Text>
          </TouchableOpacity> */}
          
          <TouchableOpacity style={styles.btnOutline} >
            <Ionicons name="md-logo-facebook" size={24} style={defaultStyles.btnIcon} />
            <Text style={styles.btnOutlineText}>Continuer avec Auht0</Text>
          </TouchableOpacity>
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
    gap:10,
    alignItems: 'center',
    marginVertical: 30,

  },
  seperator: {
    fontFamily: 'MonoBold',
    color: 'grey'
  },
  btnOutline: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: 'black',
    textAlign:'center',
    fontSize: 16,
    fontFamily:'Mono'
  }
})
export default Page;
