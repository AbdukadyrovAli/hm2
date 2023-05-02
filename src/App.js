import "./App.css";
import { MainContent } from "./components/content/MainContent";
import { Header } from "./components/header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent/>
    </div>
  );
}

export default App;
