import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};


const ReservationItem = ({ item }) => {
  return (
    <View>
      <View style={styles.container}>        
        <Text style={styles.text}>Fecha de reserva: {formatDay(item.date)}</Text>
        <Text style={styles.text}>Total a abonar $ {item.total}USD</Text>
        <Text style={styles.text}>¡Ahora sólo falta registrarte!</Text>            
      </View>      
    </View>
  );
};

export default ReservationItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    borderRadius: 2,   
    height: 200, 
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#B0BEC5',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 10,
    backgroundColor: '#EFEBE9',
  },
  item: {
    fontFamily: 'LoraItalic',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
    marginLeft: 15,
  },
  text: {
    padding: 5,
    fontSize: 15,
    marginTop: 5,
    marginLeft: 10,
    color: '#546E7A', 
  },  
});