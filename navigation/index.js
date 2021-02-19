import { createAppContainer, createSwitchNavigator } from "react-navigation";

// import Browse from "../screens/Browse";
// import Explore from "../screens/Explore";
import { Image } from "react-native";
// import Login from "../screens/Login";
// import Product from "../screens/Product";
import React from "react";
// import Settings from "../screens/Settings";
import Welcome from "../screens/Welcome";
import { createStackNavigator } from "react-navigation-stack";
import { theme } from "../constants";

const screens = createSwitchNavigator(
  {
    Welcome,
    // Login,
    // Browse,
    // Explore,
    // Product,
    // Settings,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    },
  }
);

export default createAppContainer(screens);
