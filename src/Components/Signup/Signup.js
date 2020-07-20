import React, {useState} from "react";
import styles from './Signup.module.css';
import LoginSignupHeader from "../Header/LoginSignupHeader";
import {Link} from "react-router-dom";
import signupBoxLogo from "../../images/signupBoxLogo.svg";


const Signup = () => {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [passwordAgain, setPasswordAgain] = useState([]);
    const [isChecked, setIsChecked] = useState([false]);


    return (
        <div className={`container-fluid ${styles.signupMain}`}>
            <LoginSignupHeader />
            <div className={styles.signupBox}>
                <div style={{marginTop:15, fontWeight:"bold"}}>Sign Up</div>
                <div><img src={signupBoxLogo} alt="signup" style={{marginLeft:4}}/></div>
                <textarea className={styles.signupBoxName} placeholder="Name & Surname" onChange={(e) => setName(e.target.value)}></textarea>

                <textarea className={styles.signupBoxEmail} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></textarea>

                <textarea className={styles.signupBoxPassword} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></textarea>
                <textarea className={styles.signupBoxPassword} placeholder="Password Again" onChange={(e) => setPasswordAgain(e.target.value)}></textarea>

                <div>
                    <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                    {console.log(isChecked)}
                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:11}}>Accept Terms and Conditions</label>
                </div>
                <div><hr className={styles.horizontalLine}/></div>

                <div><button className={styles.signupBoxButton}> Sign Up </button> </div>

                <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10}}>Some text!</label>
            </div>
            <span className={styles.signupHaveAnAccountText}>Already have an account?  <span style={{fontWeight:"bold"}}> <Link to="/login" style={{color:"#BDBDBD", textDecoration:"none"}}>Click here to login!</Link></span></span>
            <div><hr className={styles.horizontalLine}/></div>
        </div>
    )
}

export default Signup