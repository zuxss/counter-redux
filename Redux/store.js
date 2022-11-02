import { createStore } from "redux";
import reducer from "./reducers/countReducer";

const store = createStore(reducer);

export default store;
