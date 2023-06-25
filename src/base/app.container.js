import "src/styles/global.css";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "src/base/app";
import Store from "src/utils/store";

const AppContainer = () => {
  const store = Store;
  return (
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  );
};

export default AppContainer;
