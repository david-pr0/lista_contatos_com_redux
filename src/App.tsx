import InitialPage from "./pages/InitialPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <InitialPage />
    </Provider>
  );
}

export default App;
