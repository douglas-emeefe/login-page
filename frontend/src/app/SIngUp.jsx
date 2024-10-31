import logo from "../assets/logo.png";

import "../styles/global.css";

export function SingUp() {

    return <div className="container">
        <header className="header">
            <img src={logo} alt="logoApp" />
            <span>Faça seu cadastro</span>
        </header>

        <form>
            <div className="inputContainer">
                <label htmlFor="name">Nome</label>
                <input type="text" name="nameUser" id="name" placeholder="Digite seu nome aqui" />
            </div>

            <div className="inputContainer">
                <label htmlFor="emailSingUp">Email</label>
                <input type="email" name="emailSingUp" id="emailSingUp" placeholder="exemplo@mail.com" />
            </div>

            <div className="inputContainer">
                <label htmlFor="passwordSingUp">Senha</label>
                <input type="password" name="passwordSingUp" id="passwordSingUp" />
            </div>


            <div className="inputContainer">
                <label htmlFor="passwordSingUpConfirm">Confirme sua senha</label>
                <input type="password" name="passwordSingUpConfirm" id="passwordSingUpConfirm" />
            </div>

            <button className="btn">
                Cadastre-se
            </button>

            <div className="footer">
                <p>Já possui cadastro? <a href="#">Clique aqui!</a> </p>
            </div>

        </form>
    </div>
}