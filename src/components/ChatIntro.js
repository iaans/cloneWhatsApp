import React from "react";
import "./ChatIntro.css";
import imgWpp from "../intro-connection-light.jpg";

export default () => {
  return (
    <div className="chatIntro">
      <img src={imgWpp} />
      <h1>Mantenha seu celular conectasdasdasdadsado</h1>
      <h2>
        O WhatsApp Web conecta ao seu telefone para sicronizar suas mensagens.
        <br />
        Para reduzir o uso de dados, conecte seu celular a uma rede sem fio
      </h2>
    </div>
  );
};
