import { Badge, Block, Button, Card, Divider, Text } from "../components";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { mocks, theme } from "../constants";

import Slider from "react-native-slider";

class Settings extends Component {
  static defaultProps: { profile: any };

  state = {
    budget: 500,
    monthly: 1000,
  };

  render() {
    const { profile } = this.props;

    return (
      <Block color="white" padding={[theme.sizes.padding, 0]}>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Settings
          </Text>
          {profile && <Image source={profile.avatar} style={styles.avatar} />}
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          <Block style={styles.inputContainer}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Username
                </Text>
                <Text bold>test</Text>
              </Block>
              <Text medium secondary>
                Edit
              </Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Location
                </Text>
                <Text bold>Home</Text>
              </Block>
              <Text medium secondary>
                Edit
              </Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Email
                </Text>
                <Text bold>test@gmail.com</Text>
              </Block>
              <Text medium secondary>
                Edit
              </Text>
            </Block>
          </Block>

          <Divider />
          <Block style={styles.sliders}>
            <Block>
              <Text gray2>Budget</Text>
              <Slider
                minimumValue={0}
                maximumValue={1000}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={this.state.budget}
                onValueChange={(value) =>
                  this.setState({ budget: Math.round(value) })
                }
              />
              <Text caption right gray2>
                ${this.state.budget}
              </Text>
            </Block>
            <Block>
              <Text gray2>Monthly Cap</Text>
              <Slider
                minimumValue={0}
                maximumValue={5000}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={this.state.monthly}
                onValueChange={(value) =>
                  this.setState({ monthly: Math.round(value) })
                }
              />
              <Text caption right gray2>
                ${this.state.monthly}
              </Text>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Settings.defaultProps = {
  profile: mocks.profile,
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  inputContainer: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: theme.sizes.base * 0.7,
  },
  scrollContainer: {
    paddingTop: theme.sizes.padding,
  },
  inputRow: {
    alignItems: "flex-end",
  },
  sliders: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: theme.sizes.base * 0.7,
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: theme.colors.secondary,
  },
});

export default Settings;
