//Import default
import React, { useEffect, useState, useRef } from "react";
import "./ChatWindow.css";
import MessageItem from "./MessageItem";

//Other imports
import EmojiPicker from "emoji-picker-react";

//Import Mui
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

export default ({ user }) => {
  const body = useRef();

  let recognition = null;

  //Speech
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState();
  const [list, setList] = useState([
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
    { author: 123, body: "bla bla" },
    { author: 123, body: "bla bla bla bla bla" },
    { author: 1234, body: "bla bla bla bla" },
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };
      recognition.start();
    }
  };

  const handleSendClick = () => {};

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img
            className="chatWindow--avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div className="chatWindow--name">Ian Augusto</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div ref={body} className="chatWindow--body sidebar-content">
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={user} />
        ))}
      </div>

      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            className="chatWindow--btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>

          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
          </div>
        </div>

        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="chatWindow--pos">
          {text === "" && (
            <div onClick={handleMicClick} className="chatWindow--btn">
              <KeyboardVoiceIcon
                style={{ color: listening ? "#126ece" : "#919191" }}
              />
            </div>
          )}
          {text !== "" && (
            <div onCLick={handleSendClick} className="chatWindow--btn">
              <SendIcon style={{ color: "#919191" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
