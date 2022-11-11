import FadeLoader from "react-spinners/FadeLoader";

import styles from "./FadeLoader.module.css"

const FadeLoaderSpinner = ({ loading }) => {

    return(
        <div className={styles.spinner_container}>
            <FadeLoader
                color={"#FFFFFF"}
                loading={loading}
                cssOverride={""}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )

};

export default FadeLoaderSpinner;