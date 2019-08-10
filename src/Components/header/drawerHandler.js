import React from "react";

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from "react-navigation-hooks";

const DrawerHandler = () => {
  const { openDrawer } = useNavigation();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={openDrawer}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.text} />
          <Text style={styles.text} />
          <Text style={styles.text} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //   wrapper: {
  //     alignItems: "center"
  //   },
  text: {
    lineHeight: 2,
    height: 3,
    width: 22,
    backgroundColor: "#fff"
  },
  buttonWrapper: {
    height: 20,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20
  }
});

export default DrawerHandler;
