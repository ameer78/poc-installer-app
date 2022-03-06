import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Progress from "./Containers/Progress/Progress";
import Final from "./Containers/Final/Final";
import Options from "./Components/Options/Options";



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
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
