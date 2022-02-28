import react from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../css/App.css";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Footer from "./Footer";
import Gmail from "./Gmail";
import GmailSearch from "./GmailSearch";
import Header from "./Header";
import Login from "./Login";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import WhatsappList from "./WhatsappList";

function App() {
  return (
    <div className="app">
      <GmailSearch />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <Gmail />
      <br />
      <Footer />
      <br />
      {/* <WhatsappList />
      <WhatsappList />
      <WhatsappList />
      <WhatsappList />
      <WhatsappList /> */}
      {/*<Router>
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
      </Router>*/}
    </div>
  );
}

export default App;
