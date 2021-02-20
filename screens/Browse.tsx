import { Badge, Block, Button, Card, Text } from "../components";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { mocks, theme } from "../constants";

class Browse extends Component {
  static defaultProps: { profile: any; categories: any[] };

  state = {
    active: "Products",
  };

  renderTab = (tab: string, index: number) => {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.setState({ active: tab })}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { profile, navigation, categories } = this.props;
    const tabs = ["Products", "Inspirations", "Shop"];

    return (
      <Block color="white">
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1>Browse</Text>
          <Button onPress={() => navigation.navigate("Settings")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>

        <Block flex={false} row style={styles.tabs}>
          {tabs.map((tab, index) => this.renderTab(tab, index))}
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          <Block flex={false} row space="between" style={styles.categories}>
            {categories &&
              categories.map((category: any) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Explore", { category })}
                  key={category.id}
                >
                  <Card center middle shadow style={styles.category}>
                    <Badge
                      margin={[0, 0, 15]}
                      size={50}
                      color="rgba(41, 216, 143, 0.2)"
                    >
                      <Image source={category.image} />
                    </Badge>
                    <Text medium height={20}>{category.name}</Text>
                    <Text gray caption>
                      {category.count} products
                    </Text>
                  </Card>
                </TouchableOpacity>
              ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  category: {
    width: 150,
    height: 150,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 1.5,
    marginBottom: theme.sizes.base * 3.5
  },
});

export default Browse;
