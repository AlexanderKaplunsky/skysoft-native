import React from "react";

import { Text, View, StyleSheet, Picker, TextInput } from "react-native";
import DatePicker from "react-native-datepicker";

const UserPersonalDetails = ({
  localPersonalDetails,
  handlePersonalDetailsEdit
}) => {
  return (
    <View>
      <Text style={styles.listHeader}>Personal details</Text>
      {localPersonalDetails &&
        localPersonalDetails.map((item, key) => {
          switch (item.label) {
            case "Gender":
              return (
                <View style={styles.itemWrapper}>
                  <Text style={styles.itemLabel}>{item.label}</Text>
                  <Picker
                    style={styles.itemPicker}
                    value={item.value}
                    onValueChange={e =>
                      handlePersonalDetailsEdit(e, item.label)
                    }
                  >
                    <Picker.Item label={"Male"} value={"Male"} />
                    <Picker.Item label={"Female"} value={"Female"} />
                  </Picker>
                </View>
              );
              break;
            case "Birthday":
              return (
                <View style={styles.itemWrapper}>
                  <Text style={styles.itemLabel}>{item.label}</Text>
                  <DatePicker
                    iconSource={require("../../../assets/Images/calendar.png")}
                    style={styles.itemDatePicker}
                    date={item.value}
                    mode="date"
                    placeholder="select date"
                    format="YYYY/MM/DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={e => {
                      handlePersonalDetailsEdit(e, item.label);
                    }}
                  />
                </View>
              );
              break;
            default:
              return (
                <View style={styles.itemWrapper}>
                  <Text style={styles.itemLabel}>{item.label}</Text>
                  <TextInput
                    style={styles.itemInput}
                    defaultValue={item.value}
                    onChangeText={e => handlePersonalDetailsEdit(e, item.label)}
                  />
                </View>
              );
          }
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
  },
  itemPicker: {
    width: "100%",
    marginBottom: "3%",
    fontFamily: "OpenSans-Regular",
    color: "#000",
    borderWidth: 1
  },
  itemDatePicker: {
    width: "100%",
    marginBottom: "3%",
    fontFamily: "OpenSans-Regular",
    color: "#000",
    fontSize: 16,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingLeft: "3%"
  }
});

export default UserPersonalDetails;
