import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
