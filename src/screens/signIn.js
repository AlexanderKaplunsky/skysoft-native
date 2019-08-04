import React, { useEffect, useState } from "react";

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  AsyncStorage,
  Image
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import * as Keychain from "react-native-keychain";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignIn = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("skysoft.tech@gmail.co");
  const [userPassword, setUserPassword] = useState("oven2010");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [requiredCred, setRequiredCred] = useState("");

  const presettedValues = async () => {
    try {
      await Keychain.setGenericPassword("skysoft.tech@gmail.com", "oven2010");
      await Keychain.getGenericPassword().then(res => setRequiredCred(res));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    presettedValues();
  }, []);

  const validation = () => {
    setEmailError("");
    setPasswordError("");
    if (userEmail.length === 0) {
      setEmailError("⚠ You must fill this field");
    }
    if (userPassword.length < 8) {
      setPasswordError("⚠ Password must be at leat 8 characters long");
      if (userPassword.length === 0) {
        setPasswordError("⚠ You must fill this field");
      }
    }
  };

  const handleConfirm = () => {
    validation();
    const { password, username } = requiredCred;
    if (userEmail === username && userPassword === password) {
      AsyncStorage.setItem("isAuth", "true");
      navigation.replace("Menu");
    } else {
      userEmail !== username
        ? setEmailError("⚠ Email not listed")
        : userPassword !== password
        ? setPasswordError("⚠ Incorrect password")
        : null;
    }
  };
  return (
    <View style={styles.wrapper}>
      <KeyboardAwareScrollView>
        {/* <ImageBackground
        source={require("../../assets/Images/symbol_from_logo.png")}
        style={{ width: "100%", height: "100%" }}
      > */}
        <View style={styles.wrapper}>
          <Text style={styles.label}>Sign In</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={e => setUserEmail(e)}
              value={userEmail}
            />
            <Image
              style={styles.inputImage}
              source={require("../../assets/Images/Vector_email.png")}
            />
          </View>
          <Text style={styles.errorMessage}> {emailError} </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={e => setUserPassword(e)}
              value={userPassword}
              secureTextEntry={true}
            />
            <Image
              style={styles.inputImage}
              source={require("../../assets/Images/Vector_password.png")}
            />
          </View>
          <Text style={styles.errorMessage}> {passwordError} </Text>
          <View style={styles.confirmButton}>
            <TouchableOpacity onPress={handleConfirm}>
              <Text style={styles.confirmButtonText}>CONFIRM</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ImageBackground> */}
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column"
  },
  label: {
    fontFamily: "Catamaran-Light",
    fontSize: 48,
    lineHeight: 125,
    color: "#696B73",
    marginBottom: "20%"
  },
  inputWrapper: {
    flexDirection: "row"
  },
  inputImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    right: "2%",
    top: "30%"
  },
  input: {
    width: "90%",
    fontFamily: "Catamaran-Regular",
    borderBottomColor: "#4D4D4D",
    borderBottomWidth: 1,
    fontSize: 18,
    color: "#383838"
  },
  errorWrapper: {},
  errorMessage: {
    fontFamily: "Catamaran-Regular",
    fontSize: 14,
    color: "#E51616",
    alignSelf: "center",
    textAlign: "left",
    width: "90%",
    marginBottom: "15%"
  },
  confirmButton: {
    borderRadius: 50,
    width: "90%",
    backgroundColor: "#BDBDBD",
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  confirmButtonText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFF"
  }
});

SignIn.navigationOptions = {
  header: null
};

export default SignIn;
