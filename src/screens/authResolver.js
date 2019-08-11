import React, { useEffect } from "react";

import { View, StyleSheet } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import SplashScreen from "react-native-splash-screen";

const AuthResolver = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.show();
    AsyncStorage.getItem("isAuth").then(data => {
      if (!data || data === "false") {
        navigation.replace("SignIn");
        SplashScreen.hide();
      } else if (data === "true") {
        navigation.replace("Menu");
        SplashScreen.hide();
      }
    });
  }, []);

  return <View />;
};

export default AuthResolver;
