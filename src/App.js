import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ListPage from "./pages/ListPage/ListPage";
import MessagePage from "./pages/MessagePage";
import PostPage from "./pages/PostPage";
import RecipientPage from "./pages/RecipientPage/RecipientPage";

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
            <Route path="message" element={<MessagePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
