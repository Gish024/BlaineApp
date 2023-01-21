import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';

import { COLORS } from '../constants/colors';
import { addItem } from '../store/actions/cart.action';

const HouseDetailsScreen = ({ navigation }) => {
  const house = useSelector((state) => state.houses.selected);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const dispatch = useDispatch();


  const handleAddItemCart = (item) => {
    dispatch(addItem(house));
    navigation.navigate('Reservas', {
      name: item.title,          
    });
  };

  useEffect(() => {
    console.log(house);
  }, []);

  const onHandleChangeItem = (t) => setCheckIn(t);
  const onHandleChangeInput = (t) => setCheckOut(t);
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>{ house.name }</Text>
          <Text style={styles.text2}>País: {house.country}</Text>                  
        </View>
        <Image style={styles.img} source={ house.image } />
        <View style={styles.description}>
          <Text style={styles.text1}>{house.description}</Text>                    
          <Text style={styles.text3}>Descripción:</Text>
          <Text style={styles.info}>{house.info}</Text>
          <View style={styles.service}>
            <Text style={styles.text4}> Servicios incluidos: </Text>
            <Text style={styles.text5}>{house.services}</Text>            
          </View>
        </View>
        <View>
          <Text style={styles.days}>Disponible por {house.days} días</Text>
          <Text style={styles.price}>USD {house.price} por noche</Text>
        </View>
        <View style={styles.itemContainer}>
          <TextInput 
            value={checkIn}
            label="Check-In"
            placeholder="Check-In"
            placeholderTextColor="#BDBDBD"
            style={styles.itemInput}
            onChangeText={onHandleChangeItem}          
          />
          <TextInput 
            value={checkOut} 
            label="Check-Out"            
            placeholder="Check-Out"            
            placeholderTextColor="#BDBDBD"
            style={styles.itemInput}
            onChangeText={onHandleChangeInput}          
          />  
        </View>
        <View>
          <TouchableOpacity           
            style={styles.button} 
            onPress={handleAddItemCart}
           >
            <Text style={styles.buttonText}>Reservar</Text>
          </TouchableOpacity>        
        </View>        
      </ScrollView>
    </SafeAreaView>    
  );
};
export default HouseDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',    
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  title: {
    fontSize: 20,
    marginTop: 3,    
    fontWeight: 'bold',
    fontFamily: 'LoraItalic',
    marginBottom: 10, 
    textAlign: 'center',
  },
  img: {    
    width: 330,
    height: 300,
    marginLeft: 5,
    marginBottom: 10,
  },
  description: {    
    marginLeft: 10,
    marginRight: 15,    
  },
  text1: {
    fontSize: 16,
    textAlign: 'justify',
    color: COLORS.title,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
    marginBottom: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  text2: {
    fontSize: 15,
    textAlign: 'justify',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
    marginLeft: 10,
  },
  days: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
    marginTop: 10,
  },
  text3: {
    fontSize: 15,
    textAlign: 'justify',
    color: '#455A64',
    textDecoration: 'underline',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 15,
    textAlign: 'justify',
    color: '#455A64',
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
    marginBottom: 10,
    paddingBottom: 10,
    fontStyle: 'italic',
    paddingBottom: 20,
  },
  service: {
    height: 150,
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
  text4: {
    marginTop: 15,
    marginLeft: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    fontStyle: 'italic',   
  },
  text5: {
    marginLeft: 20,
    lineHeight: 25, 
    marginRight: 20,   
  },
  price: {
    fontSize: 20,
    fontFamily: "Lora",
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 70,
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    paddingLeft: 10,
    backgroundColor: '#ECEFF1',
    marginLeft: 60,
    marginRight: 60,
    height: 90,
    borderRadius: 2,    
  },
  itemInput: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1, 
    width: 150,
    color: '#607D8B',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 5,
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
});

