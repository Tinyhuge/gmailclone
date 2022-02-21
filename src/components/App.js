import react from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../css/App.css";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Header from "./Header";
import Login from "./Login";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/chats" element={<Chats></Chats>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<TinderCards />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<SwipeButtons />}></Route>
        </Routes>

        <Routes>
          <Route path="chat_screen" element={<ChatScreen />}></Route>
        </Routes>

        {/* <SwipeButtons /> */}
        {/* Header */}
        {/* Tinder Card */}
        {/* Bottom Actions */}

        {/* Chats Screen */}
        {/* Individual Chats Screen */}
      </Router>
    </div>
  );
}

export default App;
