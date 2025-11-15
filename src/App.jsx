import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import LayOut from "./components/layout/LayOut";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut/>}>
        <Route path="/" element={<Home />} />
  </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
