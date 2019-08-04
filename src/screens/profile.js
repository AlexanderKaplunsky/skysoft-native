import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SectionList,
  StyleSheet,
  ImageBackground,
  TextInput,
  Picker,
  PermissionsAndroid
} from "react-native";

import userfakedata from "../fakedata/userfakedata";
import SaveButton from "../Components/header/saveButton";

import UserPersonalDetails from "../Components/profile/PersonalDetails";
import UserAdress from "../Components/profile/Adress";
import UserContacts from "../Components/profile/Contacts";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DatePicker from "react-native-datepicker";
import ImagePicker from "react-native-image-picker";
import Avatar from "../Components/profile/Avatar";

const Profile = () => {
  const { Photo, Adress, Contacts, personalDetails } = userfakedata;
  const [localUserPhoto, setLocalUserProto] = useState(Photo);
  const [localPersonalDetails, setLocalPersonalDetails] = useState(
    personalDetails
  );
  const [localContacts, setLocalContacts] = useState(Contacts);
  const [localAdress, setLocalAdress] = useState(Adress);

  const haldePickImage = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);
      const source = response.uri;
      console.log(source);
      setLocalUserProto(source);
    });
  };

  const handlePersonalDetailsEdit = (newValue, label) => {
    let newData = localPersonalDetails.filter(item => {
      if (item.label === label) {
        item.value = newValue;
      }
      return item;
    });
    setLocalPersonalDetails(newData);
  };
  const handleAdressEdit = (newValue, label) => {
    let newData = localAdress.filter(item => {
      if (item.label === label) {
        item.value = newValue;
      }
      return item;
    });
    setLocalAdress(newData);
  };
  const handleContactsEdit = (newValue, label) => {
    let newData = localContacts.filter(item => {
      if (item.label === label) {
        item.value = newValue;
      }
      return item;
    });
    setLocalContacts(newData);
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.headerWrapper}>
        <ImageBackground
          source={require("../../assets/Images/colorful_bg.png")}
          style={{ height: "100%" }}
        >
          <Avatar
            localUserPhoto={localUserPhoto}
            haldePickImage={haldePickImage}
          />
        </ImageBackground>
      </View>
      <View style={styles.bodyWrapper}>
        <UserPersonalDetails
          localPersonalDetails={localPersonalDetails}
          handlePersonalDetailsEdit={handlePersonalDetailsEdit}
        />
        <UserAdress
          localAdress={localAdress}
          handleAdressEdit={handleAdressEdit}
        />
        <UserContacts
          localContacts={localContacts}
          handleContactsEdit={handleContactsEdit}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: 200,
    marginBottom: 70
  },
  bodyWrapper: {}
});

Profile.navigationOptions = {
  title: "PROFILE",
  headerTitleStyle: {
    fontFamily: "Catamaran-Bold",
    // backgroundColor: "red",
    flex: 1,
    textAlign: "center",
    letterSpacing: 1
  },
  headerRight: <SaveButton />
};

export default Profile;
