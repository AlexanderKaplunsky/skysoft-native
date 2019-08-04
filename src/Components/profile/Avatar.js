import React from "react";

import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const Avatar = ({ localUserPhoto, haldePickImage }) => {
  return (
    <View style={styles.avatarWrapper}>
      <TouchableOpacity onPress={haldePickImage}>
        <Image source={{ uri: `${localUserPhoto}` }} style={styles.avatar} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrapper: {
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
