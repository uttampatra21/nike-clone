import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        >
          <Route path="*" element={<></>} />
        </Route>
        <Route path="items" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
