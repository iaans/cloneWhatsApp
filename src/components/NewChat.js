//Import Default
import React, { useState } from "react";
import "./NewChat.css";

//Import MUI
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default () => {
  const [list, setList] = useState([
    {
      id: 123,
      avatar:
        "https://static1.purepeople.com.br/articles/9/31/39/89/@/3547260-neymar-ganha-perfil-em-app-de-namoro-e-e-624x600-2.jpg",
      name: "Neymar",
    },
    {
      id: 124,
      avatar:
        "https://i0.statig.com.br/bancodeimagens/bt/3w/pm/bt3wpm0hag3l5qujyy3q01yj9.jpg",
      name: "Messi",
    },
    {
      id: 125,
      avatar:
        "https://www.saoluisdofuturo.com.br/wp-content/uploads/2020/02/images-2.jpg",
      name: "CR7",
    },
    {
      id: 126,
      avatar:
        "https://br.web.img3.acsta.net/c_310_420/pictures/19/04/29/20/14/1886009.jpg",
      name: "Megan Fox",
    },
  ]);

  return (
    <div className="newChat">
      <div className="newChat--head">
        <div className="newChat--backbutton">
          <ArrowBackIcon style={{ color: "#FFF" }} />
        </div>

        <div className="newChat--headtitle sidebar-content">Nova conversa</div>
      </div>

      <div className="newChat--list sidebar-content">
        {list.map((item, key) => (
          <div className="newChat--item" key={key}>
            <img className="newChat--itemavatar" src={item.avatar} alt="" />
            <div className="newChat--itemname">{item.name} </div>
          </div>
        ))}
      </div>
    </div>
  );
};
