import React from "react";
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import userLogo from "../../images/userLogo.svg";
import home from "../../images/home.svg";


const LoginSignupHeader = () => {
    return (
        <div className={`container-fluid ${styles.headerMain}`}>
            <div className={`row ${styles.rowHeader}`}>
                <div className={`col-md-3 col-sm-3 col-3 ${styles.leftHeader}`}>
                    <Link to="/"><span className={styles.headerLogo}>Logo Place</span></Link>
                </div>
                <div className={`col-md-6 col-sm-6 col-6 ${styles.middleHeader}`}>

                </div>

                <div className={`col-md-3 col-sm-3 col-3 ${styles.rightHeader}`}>

                    <Link to="/" style={{color:"black", textDecoration:"none", fontSize:11, marginRight:10}}><img src={home} title="main page" alt="login"/></Link>

                </div>


                <div className={styles.headerHorizontalLine}><hr className={styles.horizontalLine}/></div>

            </div>

        </div>
    )
}

export default LoginSignupHeader