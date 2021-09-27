import React from "react";
import "./ChatlistItem.css";

export default ({ onClick, active, data }) => {
  return (
    <div className={`chatListItem ${active ? "active" : ""}`} onClick={onClick}>
      <img className="chatListItem--avatar" src={data.image} alt=""></img>
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">{data.title}</div>
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
