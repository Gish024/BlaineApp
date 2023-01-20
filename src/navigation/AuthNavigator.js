import AuthScreen from "../screens/AuthScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default AuthNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName='Login'
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
      <Stack.Screen name='Login' component={AuthScreen} />        
    </Stack.Navigator>
  );
};