import { BrowserRouter, Route, Routes } from "react-router-dom";

import MessageFrom from "./components/MessageFrom/MessageFrom";
import PostPage from "./components/PostPage/PostPage";
import LandingPage from "./pages/LandingPage";
import ListPage from "./pages/ListPage/ListPage";
import RecipientPage from "./pages/RecipientPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="post">
          <Route index element={<PostPage />} />
          <Route path=":recipientId">
            <Route index element={<RecipientPage />} />
            <Route path="message" element={<MessageFrom />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
