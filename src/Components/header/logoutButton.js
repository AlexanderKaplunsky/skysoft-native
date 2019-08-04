import React from "react";

import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet
} from "react-native";
import { useNavigation } from "react-navigation-hooks";
const LogoutButton = () => {
  // console.log(navigation);
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
