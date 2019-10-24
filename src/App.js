import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">{routes}</div>
      </HashRouter>
    </Provider>
  );
}

export default App;
