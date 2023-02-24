import "react-native-gesture-handler";
import React from 'react'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Home from "../Pages/home";
import Order from "../Pages/order";
import Wallet from "../Pages/wallet";
import Notification from "../Pages/notification";
import Profile from "../Pages/profile";


const BottomTab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
          barStyle={{
            backgroundColor: "#fff",
          }}
          
        >
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesome
                  name="home"
                  size={20}
                  color={focused === true ? "#0f9bf0" : "#000000"}
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="Order"
            component={Order}
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesome
                  name="first-order"
                  size={20}
                  color={focused === true ? "#0f9bf0" : "#000000"}
                />
              ),
            }}
          />

          <BottomTab.Screen
            name="Wallet"
            component={Wallet}
            options={{
              tabBarIcon: ({ focused }) => (
                <Entypo
                  name="wallet"
                  size={20}
                  color={focused === true ? "#0f9bf0" : "#000000"}
                />
              ),
            }}
          />

          <BottomTab.Screen
            name="Notification"
            component={Notification}
            options={{
              tabBarIcon: ({ focused }) => (
                <AntDesign
                  name="notification"
                  size={20}
                  color={focused === true ? "#0f9bf0" : "#000000"}
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <AntDesign
                  name="profile"
                  size={20}
                  color={focused === true ? "#0f9bf0" : "#000000"}
                />
              ),
            }}
          />
        </BottomTab.Navigator>
  )
}

export default BottomTabs;