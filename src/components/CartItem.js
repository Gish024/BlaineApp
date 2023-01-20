import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.img} source={ item.image } />
      <View>
        <Text style={styles.header}>{item.name}</Text>
      </View>      
      <View style={styles.detail}>
        <View>
          <Text style={styles.text}>Fecha reservada desde {item.checkIn} al {item.checkOut}</Text>
          <Text style={styles.text}>Precio por noche: $ {item.price} USD</Text>
        </View>      
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={25} color={'#EF5350'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,    
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',    
  },  
  header: {
    fontSize: 17,
    fontFamily: 'Lora',
    fontWeight: 'bold',
    paddingLeft: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  img: {
    width: 300,
    height: 180,
    shadowColor: '#B0BEC5',    
    shadowRadius: 5,
    marginLeft: 10,
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    textAlign: 'justify',
    color: COLORS.title,
    paddingBottom: 5,
  },
});