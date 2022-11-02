import React from "react";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";
import { connect } from "react-redux";
import { increment, decrement } from "./Redux/actions/countAction";

function Counter(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Counter: {props.counter}</Text>
      <Button title="increment" onPress={() => props.increment()} />
      <Button title="decrement" onPress={() => props.decrement()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
