import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Final from "./Components/Final/Final";
import Options from "./Components/Options/Options";
import Progress from "./Components/Progress/Progress";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route index element={<Options />} />
          <Route path="progress" element={<Progress />} />
          <Route path="final" element={<Final />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
