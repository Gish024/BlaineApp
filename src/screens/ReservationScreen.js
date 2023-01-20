import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import ReservationItem from '../components/ReservationItem';
import { getReservation } from '../store/actions/order.action';
import { removeItem } from '../store/actions/cart.action';

const ReservationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation.list);

  useEffect(() => {
    dispatch(getReservation());
  }, []);

 
  handleReturnInit = (reservation) => {
    dispatch(removeItem(reservation.id));
    navigation.navigate('Home');
  };

  const renderItem = ({ item }) => (
    <ReservationItem item={item} />
  );


  return (
    <View style={styles.container}>
      <FlatList
        data={reservation}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
       />
       <TouchableOpacity
          onPress={handleReturnInit}
          style={styles.confirm}
          >
        <Text style={styles.buttonText}>Volver al Inicio</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(ReservationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,    
  },
  confirm: {
    marginTop: 15,
    backgroundColor: "#448AFF",    
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    textAlign: "center",
    marginLeft: 100, 
  },
  buttonText: {
    color: '#F5F5F5',
    fontWeight: 'bold',
  },    
});