import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { auth } from "../../services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Logo from "../../components/Logo/Logo";

import styles from "./Register.module.css";

const Register = () => {
    const navigate = useNavigate();
    const [ userDataRegister, setUserDataRegister ] = useState({email: "", password: "", confirmPassword: ""});

    function handleRegister(event) {
        event.preventDefault();

        if(
            userDataRegister.email === "" || 
            userDataRegister.password === "" ||
            userDataRegister.confirmPassword === ""
        ) {
            toast.warning("Preencha todos os campos!");
            return;
        }

        if(userDataRegister.password.length < 6) {
            toast.warning("A senha precisa ter no mínimo, 6 caracteres!");
            return;
        }

        if(userDataRegister.password !== userDataRegister.confirmPassword) {
            toast.warning("As senhas não conferem!");
            return;
        }

        createUserWithEmailAndPassword(auth, userDataRegister.email, userDataRegister.password)
        .then((data) => {
            toast.success("Usuário criado com sucesso!");
            console.log(data);
            navigate("/sign-in", { replace: true });
        })
        .catch((error) => {
            toast.error("Erro ao criar conta!");
            console.log(error);
        });

    }

    return(
        <div className={styles.register_container}>
            <Logo />

            <form className={styles.form} onSubmit={handleRegister}>
                <input 
                    type="email"
                    placeholder="Digite o seu e-mail"
                    onChange={(event) => setUserDataRegister({...userDataRegister, email: event.target.value})}   
                />
                <input 
                    type="password"
                    placeholder="Digite a sua senha"
                    autoComplete="on"
                    onChange={(event) => setUserDataRegister({...userDataRegister, password: event.target.value})}    
                />
                <input 
                    type="password"
                    placeholder="Confirme a sua senha"
                    autoComplete="on"
                    onChange={(event) => setUserDataRegister({...userDataRegister, confirmPassword: event.target.value})}   
                />
                <button type="submit">Criar conta</button>
            </form>

            <p>
                Já possui uma conta? <Link to="/sign-in" className={styles.link}>Clique aqui para acessá-la</Link>!
            </p>
        </div>
    )
};

export default Register;