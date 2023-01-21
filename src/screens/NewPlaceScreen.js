import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import ImageSelector from "../components/ImageSelector";
import LocationSelector from "../components/LocationSelector";
import { addPlace } from "../store/actions/places.actions";
import { useDispatch } from "react-redux";

const NewPlaceScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    console.log(route, "Ubicación de usuario");
  }, [route]);

  const handleTitleChange = (text) => setTitle(text);

  const handleSave = () => {
    dispatch(addPlace(title, image, location));
    navigation.navigate("Dirección");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre de Usuario: </Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <ImageSelector onImage={setImage} />
        <LocationSelector
          onLocation={setLocation}
          mapLocation={route?.params?.mapLocation}
        />
        <Button
          title="Registrar usuario"
          color={'#82B1FF'}
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 16,
    color: '#78909C',
    marginBottom: 16,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NewPlaceScreen;