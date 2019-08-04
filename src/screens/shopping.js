import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SectionList,
  StyleSheet,
  ImageBackground,
  TextInput,
  ScrollView
} from "react-native";
import goodsfakedata from "../fakedata/goodsfakedata";

const Shopping = () => {
  const [filter, setFilter] = useState("");
  return (
    <View>
      <View style={styles.headerWrapper}>
        <TextInput
          style={styles.filterInput}
          placeholder="Search here"
          value={filter}
          onChangeText={e => setFilter(e)}
        />
        <Image
          style={styles.inputImage}
          source={require("../../assets/Images/search.png")}
        />
      </View>
      <Text style={styles.currentFilter}>{filter}</Text>
      <View>
        <ScrollView>
          {goodsfakedata.map((item, key) => {
            if (
              (filter.length > 0 &&
                item.label.toLowerCase().indexOf(filter.toLowerCase()) !==
                  -1) ||
              filter.length == 0
            ) {
              return (
                <View style={styles.itemWrapper}>
                  <Image
                    source={{ uri: item.photo }}
                    style={{ width: 60, height: 60 }}
                  />
                  <View style={styles.itemTextWrapper}>
                    <Text style={styles.itemText}>{item.label}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                  </View>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "rgba(132, 139, 141, 0.16)",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  filterInput: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 5,
    height: "50%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingLeft: 10
  },
  inputImage: {
    position: "absolute",
    right: "10%",
    width: 25,
    height: 25
  },
  bodyWrapper: {},
  itemWrapper: {
    alignSelf: "center",
    alignItems: "center",
    height: 70,
    flexDirection: "row",
    width: "90%",
    borderTopColor: "#4D4D4D",
    borderTopWidth: 1
  },
  itemText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 18
  },
  itemPrice: {
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.47)"
  },
  currentFilter: {
    width: "90%",
    alignSelf: "center",
    lineHeight: 40,
    height: 40,
    fontFamily: "Roboto-Regular",
    alignItems: "center"
  }
});

Shopping.navigationOptions = {
  title: "SHOPPING",
  headerTitleStyle: {
    fontFamily: "Catamaran-Bold",
    flex: 0.8,
    textAlign: "center",
    letterSpacing: 1
  }
};

export default Shopping;
