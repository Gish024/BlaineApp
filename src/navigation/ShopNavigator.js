import { Platform, TouchableOpacity } from "react-native";

import CartScreen from '../screens/CartScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryHouseScreen from '../screens/CategoryHouseScreen';
import HouseDetailsScreen from '../screens/HouseDetailsScreen';
import Ionicons from "@expo/vector-icons/Ionicons";
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import React from "react";
import ReservationScreen from '../screens/ReservationScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#F5F5F5' },
        headerTintColor: '#536DFE',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'LoraItalic',
          fontSize: 23,
        },          
      }} 
    >
      <Stack.Screen
        name='Home'
        component={CategoriesScreen}
        options={{
          title: 'Blaine APP',
        }}
      />
      <Stack.Screen
        name='Categories'
        component={CategoryHouseScreen}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen 
        name='Details' 
        component={HouseDetailsScreen}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen 
        name='Reservas' 
        component={CartScreen}
        options={({route}) => ({
          title: route.params.name,
        })}
      />      
      <Stack.Screen 
        name='Comprobante de reserva' 
        component={ReservationScreen}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Registro de Usuario"
        component={PlaceListScreen}
        options={({ navigation }) => ({
        title: "Registro de Usuario",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
              <Ionicons
                name="md-add"
                color={
                  Platform.OS === "android" ? "#2979FF" : '#B39DDB'
                }
                size={30}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Detalle"
        component={PlaceDetailScreen}
        options={{ title: "Detalle dirección" }}
      />
      <Stack.Screen
        name="Nuevo"
        component={NewPlaceScreen}
        options={{ title: "Nueva dirección" }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Mapa" }}
      />
    </Stack.Navigator>
  );
};