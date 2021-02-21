import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Block, Button, Input, Text } from "../components";
import React, { Component } from "react";
import { mocks, theme } from "../constants";

import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

let { width, height } = Dimensions.get("window");

class Explore extends Component {
  state = {
    searchInput: "",
    images: mocks.explore,
    searchFocus: new Animated.Value(0.6),
  };

  renderImage = (img: any, index: number) => {
    const { navigation } = this.props;
    const sizes = Image.resolveAssetSource(img);
    const fullWidth = width - theme.sizes.padding * 2.5;
    const resize = (sizes.width * 100) / fullWidth;
    const imgWidth = resize > 72 ? fullWidth : sizes.width;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Product")}
        key={`img-${index}`}
      >
        <Image
          source={img}
          style={[styles.image, { minWidth: imgWidth, maxWidth: imgWidth }]}
        />
      </TouchableOpacity>
    );
  };

  renderExplore = () => {
    const { images } = this.state;
    const { navigation } = this.props;

    return (
      <Block style={{ marginBottom: height / 3 }}>
        <TouchableOpacity
          style={[styles.image, styles.mainImage]}
          onPress={() => navigation.navigate("Product")}
        >
          <Image source={images[0]} style={[styles.image, styles.mainImage]} />
        </TouchableOpacity>
        <Block row space="between" wrap>
          {images.slice(1).map(this.renderImage)}
        </Block>
      </Block>
    );
  };

  renderFooter = () => {
    return (
      <LinearGradient
        locations={[0.5, 1]}
        style={styles.footer}
        colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.7)"]}
      >
        <Button gradient style={{ width: width / 2.678 }}>
          <Text bold white center>
            Filter
          </Text>
        </Button>
      </LinearGradient>
    );
  };

  handleSearchFocus = (focus: boolean) => {
    Animated.timing(this.state.searchFocus, {
      toValue: focus ? 0.8 : 0.6,
      duration: 150, // ms
    }).start();
  };

  renderSearch = () => {
    const { searchInput, searchFocus } = this.state;
    const isEditing = searchFocus && searchInput;

    return (
      <Block animated middle flex={searchFocus} style={styles.search}>
        <Input
          placeholder="Search"
          placeholderTextColor={theme.colors.gray2}
          style={styles.searchInput}
          onChangeText={(text) => this.setState({ searchInput: text })}
          value={searchInput}
          rightStyle={styles.searchRight}
          onFocus={() => this.handleSearchFocus(true)}
          onBlur={() => this.handleSearchFocus(false)}
          onRightPress={() =>
            isEditing ? this.setState({ searchInput: null }) : null
          }
          rightLabel={
            <FontAwesome
              name={isEditing ? "close" : "search"}
              size={theme.sizes.base / 1.6}
              color={theme.colors.gray2}
              style={styles.searchIcon}
            />
          }
        />
      </Block>
    );
  };

  render() {
    return (
      <Block color="white">
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Explore
          </Text>
          {this.renderSearch()}
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.exploreContainer}
        >
          {this.renderExplore()}
        </ScrollView>

        {this.renderFooter()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
  },
  search: {
    height: theme.sizes.base * 2,
    width: width - theme.sizes.base * 2,
  },
  searchInput: {
    fontSize: theme.sizes.caption,
    height: theme.sizes.base * 2,
    backgroundColor: "rgba(142, 142, 147, 0.06)",
    borderColor: "rgba(142, 142, 147, 0.06)",
    paddingLeft: theme.sizes.base / 1.3,
    paddingRight: theme.sizes.base * 1.5,
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: "transparent",
  },
  searchIcon: {
    position: "absolute",
    right: theme.sizes.base / 1.333,
    top: theme.sizes.base / 1.6,
  },
  exploreContainer: {
    marginHorizontal: theme.sizes.padding * 1.25,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.sizes.padding * 2.5,
    height: height * 0.1,
    width,
  },
  image: {
    minHeight: 100,
    maxHeight: 130,
    maxWidth: width - theme.sizes.base * 2,
    marginBottom: theme.sizes.padding,
    borderRadius: 4,
  },
  mainImage: {
    minWidth: width - theme.sizes.padding * 2.5,
    minHeight: width - theme.sizes.padding * 2.5,
  },
});

export default Explore;
