import React from "react";
import "./ChatlistItem.css";

export default ({ onClick }) => {
  return (
    <div className="chatListItem" onClick={onClick}>
      <img
        className="chatListItem--avatar"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt=""
      ></img>
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">FULANO DE TAL</div>
          <div className="chatListItem--hour">19:00</div>
        </div>
        <div className="chatListItem--line"> </div>
        <div className="chatListItem--lastMsg">
          <p>
            Opa, tudo bem? Eu também gostaria de saber quanto tempo ficar no ar
            depois de terminar?
          </p>
        </div>
      </div>
    </div>
  );
};
