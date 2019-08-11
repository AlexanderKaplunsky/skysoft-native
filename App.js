/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import SignIn from "./src/screens/signIn";
import Menu from "./src/screens/menu";
import Profile from "./src/screens/profile";
import Shopping from "./src/screens/shopping";
import Gallery from "./src/screens/gallery";
import AuthResolver from "./src/screens/authResolver";

import DrawerComponent from "./src/navigation/navigation";

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    SignIn,
    Menu,
    Profile,
    Shopping,
    Gallery,
    AuthResolver
  },
  {
    initialRouteName: "AuthResolver",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#197EC3",
        width: "100%"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontFamily: "Catamaran-Bold",
        flex: 1,
        textAlign: "center",
        letterSpacing: 1
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    AppNavigator,
    Profile
  },
  {
    contentComponent: DrawerComponent,
    hideStatusBar: false,
    drawerBackgroundColor: "rgba(255,255,255,.9)",
    drawerLockMode: "unlocked",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#6b52ae"
    }
  }
);

const styles = StyleSheet.create({
  mainWrapper: {}
});

export default createAppContainer(DrawerNavigator);
