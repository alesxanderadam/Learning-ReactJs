import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HouseList from "../house/HouseList";
import HouseDetail from "../house/HouseDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Providing house all over the world" />
        <Routes>
          <Route path="/" element={<HouseList />}></Route>
          <Route path="/house/:id" element={<HouseDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
