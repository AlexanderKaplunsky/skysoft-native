import React from "react";

import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

const TagsComponent = ({ dates }) => {
  return (
    <View style={styles.tagWrapper}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {dates.map(item => {
          return (
            <TouchableOpacity>
              <Text style={styles.tagItem}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tagWrapper: {
    flexDirection: "row",
    height: 60,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  tagItem: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginRight: 5,
    fontFamily: "OpenSans-Regular",
    color: "#4D4D4D",
    fontSize: 12
  }
});

export default TagsComponent;
