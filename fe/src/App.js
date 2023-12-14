import React from "react";
import SideBars from "./components/SideBars";
import Nav from "./components/Nav";
import Error404 from "./components/Error404";
import "./css/style.css";
import "./css/font-awesome-4.7.0/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainRoutes from "./components/routes/main";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <div className="container">
          <SideBars />

          <Routes>
            {/* Routes */}
            {MainRoutes.map((route, ind) => (
              <route.routeType
                path={route.path}
                key={ind}
                exact={route.exact}
                element={<route.component />}
              />
            ))}

            {/* Not found */}
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

