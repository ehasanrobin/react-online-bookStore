import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import "./App.css";
import BookList from "./components/BookList";
import Header from "./components/Header";
import { store } from "./redux/store";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Provider store={store}>
      <div className="App">
        <Header setSearch={setSearch}></Header>
        <BookList search={search}></BookList>
      </div>
    </Provider>
  );
}

export default App;
