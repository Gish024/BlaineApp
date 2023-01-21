import CartScreen from "../screens/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
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
        name='Cart'
        component={CartScreen}
        options={{ title: 'Listado de Reservas' }}
      />        
    </Stack.Navigator>
  );
};