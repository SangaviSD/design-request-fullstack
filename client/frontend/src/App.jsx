import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignList from "./pages/DesignList";
import NewDesign from "./pages/NewDesign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesignList />} />
        <Route path="/new" element={<NewDesign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
