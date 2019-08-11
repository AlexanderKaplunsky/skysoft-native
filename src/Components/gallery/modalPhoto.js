import React from "react";

import { View, Modal, Image, StyleSheet, ImageBackground } from "react-native";
import { BlurView } from "@react-native-community/blur";

const ModalPhoto = ({ currentImage, openModal }) => {
  return (
    <Modal animationType="fade" transparent={false} visible={openModal}>
      <Image style={styles.modalImage} source={{ uri: `${currentImage}` }} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalImage: {
    width: "96%",
    height: "96%",
    resizeMode: "contain",
    borderRadius: 5,
    margin: "2%"
  }
});

export default ModalPhoto;
