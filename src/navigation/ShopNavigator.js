import CartScreen from '../screens/CartScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryHouseScreen from '../screens/CategoryHouseScreen';
import HouseDetailsScreen from '../screens/HouseDetailsScreen';
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
        name='Listado de Reservas' 
        component={CartScreen}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen 
        name='Reserva Exitosa' 
        component={ReservationScreen}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};