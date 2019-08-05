import React from "react";

import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const Avatar = ({ localUserPhoto, haldePickImage }) => {
  return (
    <TouchableOpacity onPress={haldePickImage} style={styles.avatarWrapper}>
      <Image source={{ uri: `${localUserPhoto}` }} style={styles.avatar} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarWrapper: {
    alignItems: "center",
    // position: "absolute",
    width: 154,
    height: 154,
    top: "40%",
    alignSelf: "center",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#fff"
  },
  avatar: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 100
  }
});

export default Avatar;
