import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Details from "./components/Details";
import Main from "./components/Main";
import RegionsList from "./components/RegionsList";
import { store, persistor } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
        <RegionsList />
        <Details />
      </PersistGate>
    </Provider>
  );
}

export default App;