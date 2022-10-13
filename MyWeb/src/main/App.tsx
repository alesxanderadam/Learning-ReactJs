import Header from "./Header";
import "./App.css";
import HouseList from "../house/HouseList";

function App() {
  return (
    <div className="container">
      <Header subtitle="Providing house all over the world" />
      <HouseList />
    </div>
  );
}

export default App;
