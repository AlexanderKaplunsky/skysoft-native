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
import LogoutButton from "./src/Components/logoutButton";
import Gallery from "./src/screens/gallery";
// import DrawerComponent from './src/navigation/navigation'
// import Navigation from "./src/navigation/navigation";

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <View style={styles.mainWrapper}>
        {/* <SignIn /> */}
        {/* <Navigation /> */}
      </View>
    </Fragment>
  );
};

const AppNavigator = createStackNavigator(
  {
    SignIn,
    Menu,
    Profile,
    Shopping,
    LogoutButton,
    Gallery
    // DrawerNavigator
  },
  {
    initialRouteName: "Menu",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#197EC3"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

// const DrawerNavigator = createDrawerNavigator(
//   {
//     Shopping,
//     Profile
//   },
//   {
//     // contentComponent: <DrawerComponent/>
//     hideStatusBar: true,
//     drawerBackgroundColor: "rgba(255,255,255,.9)",
//     overlayColor: "#6b52ae",
//     contentOptions: {
//       activeTintColor: "#fff",
//       activeBackgroundColor: "#6b52ae"
//     }
//   }
// );

const styles = StyleSheet.create({
  mainWrapper: {}
});

export default createAppContainer(AppNavigator);
