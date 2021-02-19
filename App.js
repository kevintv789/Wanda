import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { Block } from "./components";
import Navigation from "./navigation";
import { StatusBar } from "expo-status-bar";

// import all used images
const images = [
  require("./assets/icons/plants.png"),
  require("./assets/icons/seeds.png"),
  require("./assets/icons/flowers.png"),
  require("./assets/icons/sprayers.png"),
  require("./assets/icons/pots.png"),
  require("./assets/icons/fertilizers.png"),
  require("./assets/images/plants_1.png"),
  require("./assets/images/plants_2.png"),
  require("./assets/images/plants_3.png"),
  require("./assets/images/explore_1.png"),
  require("./assets/images/explore_2.png"),
  require("./assets/images/explore_3.png"),
  require("./assets/images/explore_4.png"),
  require("./assets/images/explore_5.png"),
  require("./assets/images/explore_6.png"),
  require("./assets/images/avatar.png"),
];

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  handleResourceAsync = async () => {
    // caching all the images for better performance
    const cacheImages = images.map((img) => {
      return Asset.fromModule(img).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourceAsync}
          onError={(error) => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }

    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
