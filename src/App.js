import { useState } from "react";
import "./App.css";
import api from "./api";
import React from "react";
import { useEffect } from "react";

function App() {
  const [desenho, setDesenho] = useState([]);

  const desenhosAnimados = async () => {
    try {
      const response = await api.get();
      setDesenho(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    desenhosAnimados();
  }, []);

  return (
    <div className="App">
      <div className="titulo-container">
        <h1 className="titulo">Conheça desenhos animads super legais</h1>
      </div>
      {desenho.map((desenho) => (
        <div className="conteudo">
          <div key={desenho.id}>
            <p className="nome">{desenho?.name}</p>
            <img className="imagem" src={desenho?.image} /> <br />
            <a href={desenho?.link} target="_blank" rel="noopener noreferrer">
              Assista já
            </a>
            <br /> <br />
            <p>{desenho?.description}</p> <br /> <br />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
