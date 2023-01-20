import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onSelected(item)}
      >
        <Image style={styles.img} source={item.image} />
        <View>          
          <Text style={styles.title}>{item.title}</Text>
          <Ionicons name="arrow-forward" size={25} style={styles.icon}/>          
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
    margin: 25,
  },
  container: {
    flexDirection: 'row',    
  },  
  title: {
    fontFamily: 'LoraItalic',
    fontSize: 16,
    color: COLORS.title,    
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 10,
  },
  img: {
    width: 60,
    height: 60,  
  },
  icon: {
    color: '#82B1FF',
    marginLeft: 180,   
  },
});