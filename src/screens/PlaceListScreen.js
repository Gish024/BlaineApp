import * as addressAction from '../store/actions/places.actions';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlatList } from "react-native";
import PlaceItem from "../components/PlaceItem";

const PlaceListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);

  useEffect(() => {
    console.log(places);
  }, [places]);

  useEffect(() => {
    dispatch(addressAction.loadAddress());
  }, []);

  const renderItem = ({ item }) => (    
    <PlaceItem
      title={item.title}
      image={item.image}
      address={item.address}
      onSelect={() => navigation.navigate("Detalle", { placeId: place.id })}
    />
  );

  return (    
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />         
  );
};

export default PlaceListScreen;
