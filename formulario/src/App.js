import React, { Fragment, useState } from "react";
import "./App.css";

function App() {
  const userToken = localStorage.getItem("@reactjs-aula/token");

  if (!userToken) {
    alert("Não logado!");
  }

  localStorage.setItem("@reactjs-aula/token", "kajsakjs");

  const [dados, setDados] = useState({ email: "", pass: "" });

  async function onFormSubmit(e) {
    e.preventDefault();

    //console.log(dados);
    const { email, pass } = dados;

    if (email !== "lucas") {
      return alert("Credenciais inválidas email");
    }

    if (pass !== "teste") {
      return alert("Credenciais inválidas senha");
    }

    alert("Login com sucesso!!");
    localStorage.setItem("@reactjs-aula/token", "AAAABBB");

    //sessionStorage.setItem("@reactjs-aula/token", "8374jfhdjf4783847");

    //localStorage.setItem(`@reactjs-aula/${dados.nome}`)
    // localStorage.setItem("@reactjs-aula/nome", nome);
    //const nomeStorage = localStorage.getItem("@reactjs-aula/nome");
    //localStorage.removeItem("@reactjs-aula/nome");
    //const nomeStorage = localStorage.getItem("@reactjs-aula/nome");
    //console.log(nomeStorage);
  }

  function logout() {
    localStorage.removeItem("@reactjs-aula/token");
    alert("Logout feito");
  }

  const handleInputChange = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <form onSubmit={onFormSubmit}>
            <input
              placeholder="E-mail"
              type="text"
              name="email"
              onChange={handleInputChange}
            />
            <input
              placeholder="Senha"
              type="password"
              name="pass"
              onChange={handleInputChange}
            />
            <input type="submit" value="Enviar infos" />
          </form>
          <button onClick={logout}>Sair</button>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
