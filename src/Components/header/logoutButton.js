import React from "react";

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import { useNavigation } from "react-navigation-hooks";
const LogoutButton = () => {
  const { replace } = useNavigation();
  const logout = () => {
    AsyncStorage.setItem("isAuth", "false");
    replace("SignIn");
  };
  return (
    <View>
      <TouchableOpacity onPress={() => logout()}>
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Thin",
    fontSize: 14,
    color: "#FFFFFF",
    marginRight: 20
  }
});

export default LogoutButton;
