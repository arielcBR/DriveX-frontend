import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Simulação de login
    const emailCorreto = "motorista@email.com";
    const senhaCorreta = "123456";

    if (email === emailCorreto && senha === senhaCorreta) {
      alert("Login realizado com sucesso!");
      window.location.href = "/dashboard";
    } else {
      setErro("E-mail ou senha inválidos.");
    }
  }

  function esqueciSenha() {
    alert("Função de recuperação de senha em desenvolvimento.");
  }

  function irParaCadastro() {
    window.location.href = "/cadastro";
  }

  return (
    <div className="container">
      <div className="logo">
        Drive<span>X</span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>

        {erro && <p className="erro">{erro}</p>}
      </form>

      <div className="links">
        <a href="#" onClick={esqueciSenha}>
          Esqueci minha senha
        </a>
        <a href="#" onClick={irParaCadastro}>
          Não tem conta? Cadastre-se
        </a>
      </div>
    </div>
  );
}