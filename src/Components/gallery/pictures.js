import React, { useEffect, useState } from "react";

import {
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";

const PicturesComponent = ({ photoData, handleLongPress, handlePressOut }) => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );
  return (
    <FlatList
      initialNumToRender={20}
      numColumns={Math.round(screenWidth / 118)}
      data={photoData}
      bounces={false}
      contentContainerStyle={{ alignItems: "center" }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onLongPress={() => handleLongPress(item.download_url)}
          onPressOut={() => handlePressOut()}
        >
          <Image style={styles.itemImage} source={{ uri: item.download_url }} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemImageWrapper: {
    width: "33%",
    height: "33%"
  },
  itemImage: {
    width: 118,
    height: 118,
    margin: 1
  }
});

export default PicturesComponent;
