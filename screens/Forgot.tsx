import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Block, Button, Input, Text } from "../components";
import React, { Component } from "react";

import { theme } from "../constants";

const VALID_EMAIL = "test@test.com";

export default class Forgot extends Component {
  state = {
    email: VALID_EMAIL,
    errors: [],
    loading: false,
  };

  handleForgot = () => {
    const { navigation } = this.props;
    const { email } = this.state;
    const errors = [];

    this.setState({ loading: true });

    Keyboard.dismiss(); // dismiss upon login event clicked

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Password sent!",
        "Please check your email.",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Error",
        "Please check your Email address.",
        [
          {
            text: "Try again",
          },
        ],
        { cancelable: false }
      );
    }
  };

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Block
          color="white"
          padding={[theme.sizes.padding, theme.sizes.base * 2]}
        >
          <Text h1 bold>
            Forgot
          </Text>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <Button gradient onPress={() => this.handleForgot()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Forgot
                </Text>
              )}
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
