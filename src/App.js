import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostPage from "./components/PostPage/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
