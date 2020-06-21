import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class SignUp extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false
  };

  handleSignUp() {
    const { navigation } = this.props;
    const { email, username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email) errors.push("email");
    if (!password) errors.push("password");

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Sucesso!",
        "Sua conta foi criada",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Browse");
            }
          }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Cadastro
          </Text>
          <Block middle>
            <Input
              email
              label="E-mail"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              label="Nome"
              style={[styles.input]}
            />
            <Input
              label="Local de Origem"
              style={[styles.input]}
            />
            <Input
              label="Local de Visita"
              style={[styles.input]}
              
            />
            <Input
              label="Interesses Turisticos"
              style={[styles.input]}
              
            />
            <Input
              secure
              label="Senha"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleSignUp()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Cadastrar
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Login")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Ir para Login
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
