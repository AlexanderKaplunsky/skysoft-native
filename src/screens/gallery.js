import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  Modal
} from "react-native";

import ModalPhoto from "../Components/gallery/modalPhoto";
import SearchComponent from "../Components/gallery/search";
import TagsComponent from "../Components/gallery/tags";
import PicturesComponent from "../Components/gallery/pictures";

import fakeTagData from "../fakedata/fakeTagData";

const Gallery = ({ navigation }) => {
  const [photoData, setPhotoData] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [newPhotoData, setNewPhotoData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [dates, setDates] = useState(fakeTagData);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=30`;
    fetch(url)
      .then(res => res.json())
      .then(resJSON => {
        setPhotoData(photoData.concat(resJSON));
      });
  };
  const handleLoadMore = () => {
    setPage(page + 1);
    fetchData();
  };

  const handleLongPress = uri => {
    setCurrentImage(uri);
    setOpenModal(true);
  };
  const handlePressOut = () => {
    setOpenModal(false);
  };
  return (
    <View style={styles.wrapper}>
      <ModalPhoto currentImage={currentImage} openModal={openModal} />
      <SearchComponent />
      <TagsComponent dates={dates} />
      <PicturesComponent
        photoData={photoData}
        handleLongPress={handleLongPress}
        handlePressOut={handlePressOut}
      />
    </View>
  );
};

Gallery.navigationOptions = {
  title: "GALLERY",
  headerTitleStyle: {
    fontFamily: "Catamaran-Bold",
    flex: 0.8,
    textAlign: "center",
    letterSpacing: 1
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "rgba(132, 139, 141, 0.16)"
  }
});

export default Gallery;
