import React from "react";

import { ScrollView, Text } from "react-native";
import { SafeAreaView, DrawerItem } from "react-navigation";
import SingIn from "../screens/signIn";
import Menu from "../screens/menu";

const DrawerComponent = () => {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <DrawerItem />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default DrawerComponent;
