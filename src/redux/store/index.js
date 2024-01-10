import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../action/counter";
import userReducer from "../action/userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
