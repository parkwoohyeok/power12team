/* eslint-disabled */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MessageFrom from "./components/MessageFrom/MessageFrom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/post" element={<MessageFrom />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
