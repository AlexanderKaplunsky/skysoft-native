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
  const [defaultData, setDefaultData] = useState({
    Photo: "https://picsum.photos/id/1018/3914/2935",
    personalDetails: [
      { label: "First name", value: "Alexander" },
      { label: "Last name", value: "Kaplunsky" },
      { label: "Gender", value: "Male" },
      { label: "Birthday", value: "2000/04/17" },
      { label: "Education", value: "Vinnitsa National" },
      { label: "Summary", value: " Hello, i'm hered!" }
    ],
    Adress: [
      { label: "Country", value: "Ukraine" },
      { label: "City", value: "Vinnitsa" },
      { label: "Town", value: "Vinnitsa" },
      { label: "Street", value: "Zamost" },
      { label: "House", value: "15" }
    ],
    Contacts: [
      { label: "Email", value: "sashakaplunsky@gmail.com" },
      { label: "Phone", value: "380933351257" }
    ]
  });
  const { Photo, Adress, Contacts, personalDetails } = defaultData;
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
      const source = response.uri;
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
          blurRadius={2}
          source={{ uri: `${localUserPhoto}` }}
          style={styles.background}
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
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
    // blurRadius:
  }
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
