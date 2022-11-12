import { Link } from "react-router-dom";

import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth"

import { toast } from "react-toastify";

import styles from "./Header.module.css";

const Header = ({ id }) => {

    async function handleLogout() {

        localStorage.removeItem("@detailsUser");

        toast.success("Usuário deslogado com sucesso!");

        await signOut(auth);

    }

    return(
        <header className={styles.header}>
            <nav className={styles.menu}>
                <Link className={styles.menu_item} onClick={handleLogout}>
                    <i className="bi bi-box-arrow-left"></i>
                    <span>Sair</span>
                </Link>
                <Link to="/admin" className={styles.menu_item}>Criar link</Link>
                <Link to={`/my-links/${id}`} className={styles.menu_item}>Meus links</Link>
                <Link to="/manage-account" className={styles.menu_item}>Gerenciar conta</Link>
            </nav>
        </header>
    )
};

export default Header;