import { configureStore } from "@reduxjs/toolkit";
import {reducer} from './reducer'

let store = configureStore({reducer : {
    page : reducer
  }
});
export default store;