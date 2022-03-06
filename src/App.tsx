import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Progress from "./Containers/Progress/Progress";
import Final from "./Containers/Final/Final";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route index element={<Home />} />
          <Route path="progress" element={<Progress />} />
          <Route path="final" element={<Final />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
