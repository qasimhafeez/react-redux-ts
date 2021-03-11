import { Provider } from "react-redux";
import { store } from "./state";
import RepositoriesList from "./components/RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h3>Search for a Package</h3>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
