import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { filteredHouse, selectHouse } from '../store/actions/house.action';

import { FlatList } from 'react-native';
import HouseItem from '../components/HouseItem';

const CategoryHouseScreen = ({ navigation }) => {
  const dispatch = useDispatch();  
  const categoryHouse = useSelector((state) => state.houses.filteredHouse);
  const category = useSelector((state) => state.categories.selected);
  
  useEffect(() => {
    dispatch(filteredHouse(category.id));
  }, []); 
  
  
  const handleSelectedCategory = (item) => {
    dispatch(selectHouse(item.id));
    navigation.navigate('Details', {
      name: item.name,
      image: item.image,
    });
  };

  const renderHouseItem = ({ item }) => (
    <HouseItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList 
      data={categoryHouse}
      keyExtractor={(item) => item.id}
      renderItem={renderHouseItem}
      numColumns={1}
    />
  );
};

export default connect()(CategoryHouseScreen);

