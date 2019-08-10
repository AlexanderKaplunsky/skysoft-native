import React from "react";

import { Text, View, StyleSheet, TextInput } from "react-native";

const UserAdress = ({ localAdress, handleAdressEdit }) => {
  return (
    <View>
      <Text style={styles.listHeader}>Adress</Text>
      {localAdress &&
        localAdress.map((item, key) => {
          return (
            <View style={styles.itemWrapper}>
              <Text style={styles.itemLabel}>{item.label}</Text>
              <TextInput
                style={styles.itemInput}
                value={item.value}
                onChangeText={e => handleAdressEdit(e, item.label)}
              />
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    paddingLeft: "3%",
    paddingRight: "3%",
    width: "100%",
    lineHeight: 35,
    fontFamily: "OpenSans-Regular",
    fontSize: 16,
    backgroundColor: "#ECECEC",
    color: "#4D4D4D",
    marginBottom: "3%"
  },
  itemWrapper: {
    width: "94%",
    marginLeft: "3%",
    marginRight: "3%"
  },
  itemLabel: {
    fontSize: 14,
    marginBottom: "3%",
    fontFamily: "OpenSans-Light",
    color: "rgba(0, 0, 0, 0.76)"
  },
  itemInput: {
    width: "100%",
    marginBottom: "3%",
    fontFamily: "OpenSans-Regular",
    color: "#000",
    fontSize: 16,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 5,
    height: 44,
    paddingLeft: "3%"
  }
});

export default UserAdress;
