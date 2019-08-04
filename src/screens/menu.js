import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  AsyncStorage
} from "react-native";

import LogoutButton from "../Components/logoutButton";

const Menu = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem("isAuth").then(data => {
      if (data == "false") {
        console.log(data);
        navigation.replace("SignIn");
      }
    });
  }, []);
  return (
    <View style={styles.wrapper}>
      <View style={styles.itemWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            style={styles.image}
            source={require("../../assets/Images/forum-user.png")}
          />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("Shopping")}>
          <Image
            style={styles.image}
            source={require("../../assets/Images/shopping-cart.png")}
          />
          <Text style={styles.menuText}>Shopping</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("Gallery")}>
          <Image
            style={styles.galleryImage}
            source={require("../../assets/Images/gallery_icon.png")}
          />
          <Text style={styles.menuText}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
    backgroundColor: "#E5E5E5"
  },
  itemWrapper: {
    width: "30%",
    height: 120,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    shadowRadius: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  image: {
    alignSelf: "center",
    width: 30,
    height: 30,
    marginBottom: 5,
    marginTop: 10
  },
  galleryImage: {
    alignSelf: "center",
    width: 35,
    height: 30,
    marginBottom: 5,
    marginTop: 10
  },
  menuText: {
    fontFamily: "Roboto-Regular",
    color: "#4D4D4D"
  }
});

Menu.navigationOptions = {
  title: "Test Tasks",
  headerRight: <LogoutButton />,
  headerLeft: (
    <View>
      <TouchableOpacity>
        <Text>-</Text>
        <Text>-</Text>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Menu;
