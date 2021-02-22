import { Block, Button, Divider, Text } from "../components";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { Component } from "react";
import { mocks, theme } from "../constants";

import { Icon } from "react-native-elements";

const { width, height } = Dimensions.get("window");

export default class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
          <Icon
            name="dots-three-horizontal"
            type="entypo"
            color={theme.colors.gray}
          />
        </Button>
      ),
    };
  };

  state = {
    product: mocks.products[0],
  };

  renderGallery = () => {
    const { product } = this.state;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 2.8 }}
          />
        )}
      />
    );
  };

  render() {
    const { product } = this.state;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {this.renderGallery()}

        <Block style={styles.product}>
          <Text h2 bold>
            {product.name}
          </Text>
          <Block flex={false} row margin={[theme.sizes.base, 0]}>
            {product.tags.map((tag: string) => (
              <Text key={tag} caption style={styles.tag} gray>
                {tag}
              </Text>
            ))}
          </Block>
          <Text light height={22}>
            {product.description}
          </Text>

          <Divider margin={[theme.sizes.padding * 0.9, 0]} />

          <Block>
            <Text semibold>Gallery</Text>
            <Block row margin={[theme.sizes.padding * 0.9, 0]}>
              {product.images.slice(1, 3).map((image: any) => (
                <Image source={image} style={styles.image} key={image} />
              ))}
              <Block
                card
                flex={false}
                center
                middle
                color="rgba(197, 204, 214, 0.2)"
                style={styles.more}
              >
                <Text gray>+{product.images.slice(3).length}</Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "white",
  },
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding,
  },
  tag: {
    borderColor: theme.colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.padding / 3.5,
    marginRight: theme.sizes.base * 0.625,
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base,
  },
  more: {
    height: 55,
    width: 55,
  },
});
