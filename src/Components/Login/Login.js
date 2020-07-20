import React from "react";
import styles from './Login.module.css';
import Header from "../Header/Header";
import LoginSignupHeader from "../Header/LoginSignupHeader";


const Login = () => {
    return (
    <div className={`container-fluid ${styles.loginMain}`}>
        <LoginSignupHeader />

    </div>
)
}

export default Login