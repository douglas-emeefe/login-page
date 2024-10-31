import logo from "../assets/logo.png";

import "../styles/global.css";

export function SingIn() {

  return <div className="container">
    <header className="header">
      <img src={logo} alt="logoApp" />
      <span>Faça login na sua conta</span>
    </header>

    <form>
      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder="exemplo@mail.com" />
      </div>

      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="********" />
      </div>
      <a href="#">Esqueceu sua senha?</a>

      <button className="btn">
        Login
      </button>

      <div className="footer">
        <p>Não possui cadastro? <a href="#">Cadastre-se</a></p>
      </div>
    </form>
  </div>
}
