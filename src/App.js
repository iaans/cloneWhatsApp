//Import default
import React, { useState, useEffect } from "react";
import "./App.css";
import "./App.js";

//Import components
import ChatlistItem from "./components/ChatlistItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";
import Login from "./components/Login";
import Api from "./Api";

//Import icons from Mui
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

export default () => {
  const [chatlist, setChatList] = useState([]);

  const [activeChat, setActiveChat] = useState({});
  // console.log("🚀 ~ file: App.js ~ line 41 ~ activeChat", activeChat);
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState({
    id: "6TznDs7NJAexE8xkKkIg5fYoG733",
    name: "Ian",
    avatar: "https://graph.facebook.com/1766799826858821/picture",
  });

  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(() => {
    if (user !== null) {
      let unsub = Api.onChatList(user.id, setChatList);
      return unsub;
    }
  }, [user]);

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    };
    await Api.addUser(newUser);
    setUser(newUser);
  };

  if (user === null) {
    return <Login onReceive={handleLoginData} />;
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div onClick={handleNewChat} className="header--btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar um nova conversa"
            />
          </div>
        </div>
        <div className="sidebar-content">
          <div className="chatlist">
            {chatlist.map((item, key) => (
              <ChatlistItem
                key={key}
                data={item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() => setActiveChat(chatlist[key])}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && (
          <ChatWindow user={user} data={activeChat} />
        )}

        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
};
