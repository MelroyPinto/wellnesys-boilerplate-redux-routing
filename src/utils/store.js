import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

const Store = configureStore({ reducer });

export default Store;
