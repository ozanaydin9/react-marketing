import React from "react";
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import userLogo from "../../images/userLogo.svg";
import signupLogo from "../../images/signup.svg";


const Header = () => {
    return (
        <div className={`container-fluid ${styles.headerMain}`}>
            <div className={`row ${styles.rowHeader}`}>
                <div className={`col-md-3 col-sm-3 col-3 ${styles.leftHeader}`}>
                    <Link to="/"><span className={styles.headerLogo}>Logo Place</span></Link>
                </div>
                <div className={`col-md-6 col-sm-6 col-6 ${styles.middleHeader}`}>

                    <div className={styles.headerSearch}>
                        <textarea maxLength={50} className={styles.headerSearchTextArea}> </textarea>
                        <span className={styles.headerSearchIcon}>search</span>
                    </div>
                </div>

                <div className={`col-md-3 col-sm-3 col-3 ${styles.rightHeader}`}>

                    <Link to="/login" style={{color:"black", textDecoration:"none", fontSize:11, marginRight:10}}><img src={userLogo} title="login" alt="login"/></Link>
                    <Link to="/signup" style={{color:"black", textDecoration:"none", fontSize:11, marginLeft:10}}><img src={signupLogo} title="signup" alt="signup"/></Link>


                      {/*  <Link to="/login" style={{color:"black", textDecoration:"none", fontSize:11, marginRight:2}}><img src={userLogo} alt="login"/><span style={{display:"block"}}>Login</span></Link>
                        <Link to="/signup" style={{color:"black", textDecoration:"none", fontSize:11, marginLeft:2}}><img src={signupLogo} alt="signup"/></Link>*/}
                </div>


                <div className={styles.headerHorizontalLine}><hr className={styles.horizontalLine}/></div>

            </div>

        </div>
    )
}

export default Header