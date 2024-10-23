export function App() {

  return <div className="container">
    <header className="header">
      <img src="" alt="" />
      <span>Faça login na sua conta</span>
    </header>

    <form>
      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder="exemplo@gmail.com" />
      </div>

      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="********" />
      </div>
    </form>

    <a href="#">Esqueceu sua senha?</a>

    <button className="btn">
      Login <img src="" alt="" />
    </button>

    <div className="footer">
      <p>Não possui cadastro? <a href="#">Cadastre-se</a></p>
    </div>

  </div>
}
