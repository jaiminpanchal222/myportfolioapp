import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import store from "./store/store.tsx";
import { Provider } from "react-redux";


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);
