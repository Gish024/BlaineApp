import ReservationScreen from "../screens/ReservationScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ReservationNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName='Reservation'
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
        name='Reservation'
        component={ReservationScreen}
        options={{
          title: 'Reserva confirmada',
        }}
      />

    </Stack.Navigator>
  );
};