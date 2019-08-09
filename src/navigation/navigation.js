import React from "react";

import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { SafeAreaView, DrawerItems } from "react-navigation";

import GestureRecognizer from "react-native-swipe-gestures";

// import SingIn from "../screens/signIn";
// import Menu from "../screens/menu";

const DrawerComponent = ({ navigation }) => (
  <GestureRecognizer
    onSwipeLeft={navigation.closeDrawer}
    style={styles.gestureHandler}
  >
    <ScrollView>
      <SafeAreaView
        style={styles.wrapper}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <TouchableOpacity onPress={navigation.closeDrawer}>
          <Image
            style={styles.closeButtonImg}
            source={require("../../assets/Images/Vector_close.png")}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>LIST OF TASKS</Text>
          <TouchableOpacity
            style={styles.routeWrapper}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              source={require("../../assets/Images/forum-user.png")}
              style={styles.routeImage}
            />
            <Text style={styles.routeText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeWrapper}
            onPress={() => navigation.navigate("Shopping")}
          >
            <Image
              source={require("../../assets/Images/shopping-cart.png")}
              style={styles.routeImage}
            />
            <Text style={styles.routeText}>Shopping</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeWrapper}
            onPress={() => navigation.navigate("Gallery")}
          >
            <Image
              source={require("../../assets/Images/gallery_icon.png")}
              style={styles.routeImage}
            />
            <Text style={styles.routeText}>Gallery</Text>
          </TouchableOpacity>
        </View>
        {/* <DrawerItems {...props} /> */}
      </SafeAreaView>
    </ScrollView>
  </GestureRecognizer>
);

const styles = StyleSheet.create({
  gestureHandler: {
    height: "100%",
    width: "100%"
  },
  wrapper: {
    paddingLeft: 20,
    paddingTop: 20
  },
  closeButton: {
    height: 20,
    justifyContent: "center"
  },
  closeButtonImg: {
    height: 30,
    width: 30
  },
  title: {
    fontFamily: "Catamaran-Bold",
    color: "#197EC3",
    letterSpacing: 1,
    fontSize: 19,
    marginVertical: 20
  },
  routeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  routeImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 10
  },
  routeText: {
    fontFamily: "Catamaran-Regular",
    color: "#4D4D4D",
    fontSize: 17
  }
});
export default DrawerComponent;
