import Navbar from "./Components/NavbarComponents";
import "./App.css";
import Routes from "./router";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import {store ,persistedStore}from "./Redux/store";

import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
