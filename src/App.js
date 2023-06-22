import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BookList></BookList>
    </div>
  );
}

export default App;
