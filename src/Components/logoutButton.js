import React from "react";

import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";

const LogoutButton = navigation => {
  console.log(navigation);
  const logout = () => {
    AsyncStorage.setItem("isAuth", "false");
    navigation.navigate("SignIn");
  };
  return (
    <View>
      <TouchableOpacity onPress={() => logout()}>
        <Text> Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;
