import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

import Logo from "../../components/Logo/Logo";

import styles from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();
    const [ userDataLogin, setUserDataLogin ] = useState({email: "", password: ""});

    function handleLogin(event) {
        event.preventDefault();

        if(userDataLogin.email === "" || userDataLogin.password === "") {
            toast.warning("Preencha todos os campos!");
            return;
        }

        if(userDataLogin.password.length < 6) {
            toast.warning("A senha precisa ter no mínimo, 6 caracteres!");
            return;
        }

        signInWithEmailAndPassword(auth, userDataLogin.email, userDataLogin.password)
        .then((data) => {
            toast.success("Usuário logado com sucesso!");
            console.log(data);
            navigate("/admin", { replace: true });
        })
        .catch((error) => {
            toast.error("Erro ao fazer login!");
            console.log(error);
        });

    }

    return(
        <div className={styles.login_container}>
            <Logo />

            <form className={styles.form} onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder="Digite o seu e-mail"
                    onChange={(event) => setUserDataLogin({...userDataLogin, email: event.target.value})} 
                />
                <input 
                    type="password"
                    placeholder="Digite a sua senha"
                    autoComplete="on"
                    onChange={(event) => setUserDataLogin({...userDataLogin, password: event.target.value})}   
                />
                <button type="submit">Entrar</button>
            </form>

            <p>
                Ainda não possui uma conta? <Link to="/sign-up" className={styles.link}>Clique aqui para criá-la</Link>!
            </p>
        </div>
    )
};

export default Login;