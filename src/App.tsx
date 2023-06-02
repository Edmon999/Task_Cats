import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import { Navbar } from "./features/Main/components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
