import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { confirmCart, removeItem } from '../store/actions/cart.action';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../components/CartItem';
import React from 'react';

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total));
    navigation.navigate('Historial', {
      total: items.days,                
    });
  };  

  const handleDeleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
         />
      </View>
      <View style={styles.footer}>        
        <View style={styles.total}>            
            <Text style={styles.text}>Total a abonar: $ {total} USD</Text>
        </View>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text style={styles.buttonText}>Confirmar</Text>          
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#E0E0E0',
    borderTopWidth: 1, 
  },
  confirm: {
    marginTop: 15,
    backgroundColor: "#448AFF",    
    height: 40,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    textAlign: "center",
    marginLeft: 120, 
  },
  buttonText: {
    color: '#F5F5F5',
    fontWeight: 'bold',
  },    
  total: {
    flexDirection: 'row',
    height: 80,
    borderColor: '#B0BEC5',
    borderRadius: 3,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 15,
    shadowColor: '#B0BEC5',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: '#E3F2FD', 
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',        
  },
  text: {    
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 25,
  },
});