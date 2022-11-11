import styles from "./Input.module.css";

const Input = (props) => {
    return(
        <input 
            {...props}
            className={styles.form_input}
        />
    )
};

export default Input;