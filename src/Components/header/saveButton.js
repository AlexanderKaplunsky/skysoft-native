import React from "react";

import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet
} from "react-native";

const SaveButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.text}>Save</Text>
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

export default SaveButton;
