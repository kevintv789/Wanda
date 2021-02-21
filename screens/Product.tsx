import { Block, Text } from "../components";
import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default class Product extends Component {
  render() {
    return (
      <Block color="white">
        <Text> textInComponent </Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
