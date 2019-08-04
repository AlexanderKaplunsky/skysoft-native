import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Image
} from "react-native";
import fakeimage from "../fakedata/fakeimage";

const Gallery = ({ navigation }) => {
  const [photoData, setPhotoData] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [newPhotoData, setNewPhotoData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=20`)
      .then(res => res.json())
      .then(res => {
        // console.log("res", res);
        // let newData = photoData;
        // newData.push(...res);
        // console.log("newData", newData);
        setPhotoData(res);
        console.log("Fetch photoData", photoData.length);
        // setNewPhotoData(photoData);
        // newPhotoData.push(res);
        // setPhotoData(...newPhotoData);
      });
  };
  const handleLoadMore = async () => {
    try {
      let nextPage = page + 1;
      await setPage(nextPage);
      await fetchData();
      console.log("here", page);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("photoData", photoData.length);
  return (
    <View>
      <ScrollView>
        <View>
          <TextInput />
        </View>
        <View>
          {console.log("render", photoData.length)}
          <View />
          <FlatList
            //   initialNumToRender={9}
            //   onEndReachedThreshold={1}
            onEndReached={handleLoadMore}
            contentContainerStyle={{
              flex: 1,
              // flexWrap: "wrap",
              flexDirection: "column",
              height: "100%",
              width: "100%"
            }}
            data={photoData}
            renderItem={({ item }) => (
              <View
                style={{
                  marginTop: 25,
                  width: "50%"
                }}
              >
                <Image
                  style={{ width: 120, height: 120 }}
                  source={{ uri: item.download_url }}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
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

export default Gallery;
