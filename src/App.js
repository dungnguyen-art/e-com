import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {routes} from "./routes/index"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
