import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useAuth0 } from "react-native-auth0";

const Page = () => {
  // const {signOut, isSignedIn} = useAuth()
  const {clearSession} = useAuth0();
  const onPress = async () => {
    try {
        await clearSession();
    } catch (e) {
        console.log(e);
    }
};
  return (
    <View>
      {/* <Button title="Deconnexion" onPress={() => signOut()}/>
        {!isSignedIn && (<Link href={'/(modals)/login'}>
         <Text>Se Connecter</Text></Link>)} */}
         <Button onPress={onPress} title="Deconnexion" />
    </View>
  );
};

export default Page;
