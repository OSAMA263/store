import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store.jsx";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ChakraProvider disableGlobalStyle={true} >
          <App />
        </ChakraProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
