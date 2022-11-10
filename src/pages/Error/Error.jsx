import { Link } from "react-router-dom";

import styles from "./Error.module.css";

const Error = () => {
    return(
        <div className={styles.error}>
            <span className={styles.emoji}>&#9785;</span>

            <h1>Página não encontrada.</h1>

            <p>A página procurada, não existe!</p>

            <Link className={styles.link} to="/">Voltar para a página inicial</Link>
        </div>
    )
};

export default Error;