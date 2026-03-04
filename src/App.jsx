import SearchForm from "./components/SearchForm";

import "./App.css";
import weatherApi from "./api/weatherApi";

function App() {
  return (
    <>
      <SearchForm onSearch={weatherApi} />
    </>
  );
}

export default App;
