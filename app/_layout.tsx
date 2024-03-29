import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, router, useRouter } from 'expo-router';
import React from 'react';
import { useEffect } from 'react';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import * as SecureStore from 'expo-secure-store'
import { TouchableOpacity, useColorScheme } from 'react-native';
// import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

// const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY


// const tokenCache = {
//   async getToken(key: string) {
//     try {
//       return SecureStore.getItemAsync(key)
//     } catch (err) {
//       return null
//     }
//   },
//   async saveToken(key: string, value: string ):Promise<void> {
//     try {
//       return SecureStore.setItemAsync(key, value)
//     } catch (err) {
//     }
//   }
// }

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Mono: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    MonoBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
    <Auth0Provider domain={"dev-4yth0qnvfuocf4xn.eu.auth0.com"} clientId={"5sgVvDG6c89Mv7pA5QPxzDGm2T1pZB1S"}>
      <RootLayoutNav />
      </Auth0Provider>
    // </ClerkProvider> 
  )
}

function RootLayoutNav() {
  const router = useRouter();
  const {user, error} = useAuth0();
  useEffect(() => {
    if (!user) {
      router.push('/(modals)/login')
    }
  }, [user])

  // const {isLoaded, isSignedIn} = useAuth()

  // useEffect(() => {
  //   if (isLoaded && !isSignedIn) {
  //     router.push('/(modals)/login')
  //   }
  // }, [isLoaded])

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/login" options={{ title:`Connexion ou Inscription`, presentation: 'modal', headerTitleStyle: {
        },
        headerLeft:() => (
          <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name='close-outline'size={28}/>
          </TouchableOpacity>
        ),
          }} 
          />

<Stack.Screen name="listing/[id]" options={{ headerTitle: '' }} />
<Stack.Screen name="(modals)/booking" options={{ presentation: 'transparentModal', animation: 'fade',
headerLeft:() => (
  <TouchableOpacity onPress={() => router.back()}>
  <Ionicons name='close-outline'size={28}/>
  </TouchableOpacity>
),}} />
      </Stack>
  );
}
