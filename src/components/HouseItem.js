import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants/colors';
import React from 'react';

const HouseItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelected(item)}
      style={styles.container}>
      <View style={styles.houseItem}>
        <Image style={styles.img} source={item.image} />
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>        
        <View>          
          <Text style={styles.details}>{item.description}</Text>
          <Text style={styles.price}>${item.price} USD por noche</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HouseItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    borderRadius: 2,   
    height: 300, 
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#B0BEC5',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 10,
  },
  houseItem: {  
    justifyContent: 'center',
    alignItems: 'center',    
    height: 300, 
    padding: 2,  
  },
  title: {
    fontSize: 18,
    fontFamily: 'LoraItalic',
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',    
  },
  details: {
    fontSize: 13,
    justifyContent: 'space-around',
    alignItems: 'space-around',    
    fontFamily: 'Lora',
    color: COLORS.title,    
  },
  price: {
    fontSize: 13,
    color: '#37474F',
    fontWeight: 'bold',
    marginLeft: 70,
    paddingTop: 5,
  },
  img: {
    width: '90%',
    height: '60%',
    marginTop: 2,
    marginBottom: 10, 
  },
});