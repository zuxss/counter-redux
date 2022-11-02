import React from "react";
import store from "./Redux/store.js";
import { Provider } from "react-redux";
import Counter from "./counter.js";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
