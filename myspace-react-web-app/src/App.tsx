import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from './Constants/NavigationBar';
import Home from './HomePage';
import Inbox from './InboxPage/Inbox';
import Post from './PostPage/Post';
import Adding from "./AddingPage/Adding";

function App() {
  return (
    <HashRouter>
      <div id="wd-kanbas">
        <NavigationBar />
        <Routes>
          <Route path="/MakeSpace/Post123/:cid/*" element={<Post />} />
          <Route path="/MakeSpace/Inbox" element={<Inbox />} />
          <Route path="MakeSpace/Adding" element={<Adding />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
