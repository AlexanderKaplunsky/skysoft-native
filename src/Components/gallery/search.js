import React from "react";

import { View, TextInput, Image, StyleSheet } from "react-native";

const SearchComponent = () => {
  return (
    <View style={styles.headerWrapper}>
      <TextInput style={styles.input} placeholder={"Search..."} />
      <Image
        style={styles.searchImage}
        source={require("../../../assets/Images/search.png")}
      />
      <Image
        style={styles.newPhotoImage}
        source={require("../../../assets/Images/new_photo_icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    height: 60,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    lineHeight: 15,
    borderRadius: 5,
    height: 40,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingLeft: 10
  },
  searchImage: {
    position: "absolute",
    right: "15%",
    top: 20,
    width: 20,
    height: 20
  },
  newPhotoImage: {
    width: 20,
    height: 20
  }
});

export default SearchComponent;
