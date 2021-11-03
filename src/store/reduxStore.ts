import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slices/main.slices";

const reduxStore = configureStore({
    reducer: {
        main: mainReducer
    }
});

export default reduxStore;