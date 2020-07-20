import React, {useState} from "react";
import styles from './Login.module.css';
import Header from "../Header/Header";
import LoginSignupHeader from "../Header/LoginSignupHeader";
import loginBoxLogo from "../../images/loginBoxLogo.svg";
import {Link} from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    return (
    <div className={`container-fluid ${styles.loginMain}`}>
        <LoginSignupHeader />

        <div className={styles.loginBox}>
            <div style={{marginTop:15, fontWeight:"bold"}}>Login</div>
            <div><img src={loginBoxLogo} alt="login" style={{marginRight:4}}/></div>

            <textarea className={styles.loginBoxEmail} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></textarea>

            <textarea className={styles.loginBoxPassword} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></textarea>

            <div><hr className={styles.horizontalLine}/></div>

            <div><button className={styles.loginBoxButton}> Login </button> </div>

            <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginTop:20}}>Some text!</label>
        </div>
        <span className={styles.loginHaveAnAccountText}>Do not have an account?  <span style={{fontWeight:"bold"}}> <Link to="/signup" style={{color:"#BDBDBD", textDecoration:"none"}}>Click here to sign up!</Link></span></span>
        <div><hr className={styles.horizontalLine}/></div>

    </div>
)
}

export default Login