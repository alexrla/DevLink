import { useState } from "react";

import styles from "./Config.module.css";

import { db } from "../../services/firebaseConnection";
import {  
    setDoc,
    doc,
} from "firebase/firestore";

import { toast } from "react-toastify";

import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";

const Config = () => {

    const [ nameUser, setNameUser ] = useState("");
    const [ photoUser, setPhotoUser ] = useState("");

    function handleUpdate(event) {
        event.preventDefault();

        if(nameUser === "" || photoUser === "") {
            toast.warning("Preencha todos os campos!");
            return;
        }

        setDoc(doc(db, "info-user", "info"), {
            userName: nameUser,
            userPhoto: photoUser
        })
        .then(() => {
            toast.success("Informações do usuário atualizadas com sucesso!");
        
            setNameUser("");
            setPhotoUser("");
        })
        .catch((error) => {
            toast.error("Erro ao atualizar as informações do usuário!");

            console.log(error);
        });
    }

    return(
        <div className={styles.config_container}>
            <Header />

            <Logo />

            <form className={styles.form} onSubmit={handleUpdate}>
                <div className={styles.field}>
                    <label htmlFor="photo">Nome do usuário:</label>
                    <Input 
                        type="text"
                        placeholder="Nome do usuário"
                        id="name"
                        name="name"
                        value={nameUser}
                        onChange={(event) => setNameUser(event.target.value)} 
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="photo">Foto de perfil:</label>
                    <Input 
                        type="text"
                        placeholder="URL da imagem de perfil"
                        id="photo"
                        name="photo"
                        value={photoUser}
                        onChange={(event) => setPhotoUser(event.target.value)}
                    />
                </div>
                <button type="submit">Atualizar Dados</button>
            </form>
        </div>
    )
};

export default Config;