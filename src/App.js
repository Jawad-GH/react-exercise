import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Exercise1 from "./exercise1";
import Exercise2 from "./exercise2";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={'exercise1'}> Exercise1</Link>
        <Link to={'exercise2'}> Exercise2</Link>
      </nav>
      <Routes>
        <Route path="/exercise1" element={<Exercise1 />} />
          Exercise1
       
        <Route path="/exercise2" element={<Exercise2 />} />
          Exercise2
      
      </Routes>
      {/* <Exercise1  />
      <Exercise2 /> */}
    </div>
  );
}

export default App;
