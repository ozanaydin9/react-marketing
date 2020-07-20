import React from "react";
import styles from './Home.module.css';
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import SubHeader from "../SubHeader/SubHeader";


const Home = () => {
    return (
        <div className={`container-fluid ${styles.homeMain}`}>
            <Header />

            <SubHeader />

            <div className={`container-fluid`}>
                <div className={`container-fluid row ${styles.rowContainerHeaderBreadcrumbAndFilterBox}`}>
                   {/* <div className={`col-lg-3`} >

                    </div>*/}
                    <div className={`col-md-10 col-10 ${styles.containerHeaderBreadcrumbAndFilterBox}`}>

                        <ul className={styles.breadcrumb}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Computers</a></li>
                            <li>Apple</li>
                        </ul>

                        <select className={styles.selectBox}>
                            <option value="test1">Test1</option>
                            <option value="test2">Test2</option>
                            <option value="test3">Test3</option>
                        </select>

                    </div>



                </div>

            </div>

            <div className={`container-fluid ${styles.homeContentWrapper}`}>
                <div className={`row ${styles.rowHomeContentWrapper}`}>
                    <div className={`col-md-2 col-2 ${styles.leftHomeContentWrapper}`}>
                        <span><Link to="/">Logo Place</Link></span>
                    </div>
                    <div className={`col-md-8 col-8 ${styles.middleHomeContentWrapper}`}>
                        <div className={styles.homeContentWrapperContentBox}>

                        </div>

                    </div>

                    <div className={`col-md-2 col-2 ${styles.rightHomeContentWrapper}`}>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Home