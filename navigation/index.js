import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Browse from "../screens/Browse";
import Explore from "../screens/Explore";
import Forgot from "../screens/Forgot";
import { Image } from "react-native";
import Login from "../screens/Login";
import Product from "../screens/Product";
import React from "react";
import Settings from "../screens/Settings";
import Signup from "../screens/Signup";
import Welcome from "../screens/Welcome";
import { createStackNavigator } from "react-navigation-stack";
import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Signup,
    Forgot,
    Browse,
    Settings,
    Explore,
    Product,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 5,
        backgroundColor: theme.colors.white,
        shadowColor: "transparent",
        elevation: 0, // for android
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitleVisible: false,
      headerTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.padding * 1.2,
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base,
      },
    },
  }
);

export default createAppContainer(screens);
