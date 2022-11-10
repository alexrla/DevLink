import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

const Logo = () => {
    return(
        <Link to="/">
            <h1 className={styles.logo}>
                Dev
                <span className={styles.logo_text}>Link</span>
            </h1>
        </Link>
    )
};

export default Logo;