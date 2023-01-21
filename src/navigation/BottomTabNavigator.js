import { StyleSheet, View } from "react-native";

import CartNavigator from "./CartNavigator";
import Ionicons from '@expo/vector-icons/Ionicons';
import ReservationNavigator from "./ReservationNavigator";
import ShopNavigator from "./ShopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return(
    <BottomTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: StyleSheet.tabBar,
      }} 
    >
      <BottomTabs.Screen name='ShopTab' component={ShopNavigator} options={{
        tabBarIcon: ({ focus}) => (
          <View style={styles.item}>
            <Ionicons name="home" size={25} color='#82B1FF'/>             
          </View>  
        ),
      }}
      />
      <BottomTabs.Screen name='CartTab' component={CartNavigator} options={{
        tabBarIcon: ({ focus}) => (
          <View style={styles.item}>
            <Ionicons name="airplane-sharp" size={25} color='#82B1FF'/>             
          </View>  
        ),
      }}
      />
      <BottomTabs.Screen name='ReserTab' component={ReservationNavigator} options={{
        tabBarIcon: ({ focus}) => (
          <View style={styles.item}>
            <Ionicons name="list" size={25} color='#82B1FF'/>             
          </View>  
        ),
      }}
      />
    </BottomTabs.Navigator>
  ); 
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: '#7f5df0',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 120,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 

