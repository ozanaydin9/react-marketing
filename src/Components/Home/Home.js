import React, {useState} from "react";
import styles from './Home.module.css';
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import SubHeader from "../SubHeader/SubHeader";
import Card from "../Card/Card";


const Home = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className={`container-fluid ${styles.homeMain}`}>
            <Header />

            <SubHeader />

            <div className={`container-fluid`}>
                <div className={`row ${styles.rowContainerHeaderBreadcrumbAndFilterBox}`}>
                   {/* <div className={`col-lg-3`} >

                    </div>*/}
                    <div className={`col-md-12 col-12 ${styles.containerHeaderBreadcrumbAndFilterBox}`}>

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
                        <div className={styles.leftHomeContentWrapperTop}>
                            <div className={styles.leftHomeContentWrapperTopBrand}>
                                Apple</div>
                            <div className={styles.leftHomeContentWrapperTopBrandDescription}> Description </div>

                            <div className={styles.leftHomeContentWrapperTopBrandCategories}>
                                <div><hr className={styles.horizontalLine} style={{margin:0, padding:"5px 0px"}}/></div>
                                <span style={{fontSize:11}}>Sub Categories</span>

                            <ul style={{listStyleType: "none" ,padding:0, marginTop:5, marginBottom:0}}>
                                <li><a href="#about">Iphone</a></li>
                                <li><a href="#about">Ipad</a></li>
                                <li><a href="#about">Macbook</a></li>
                            </ul>
                            </div>
                        </div>
                        <div className={styles.leftHomeContentWrapperMiddle}>
                            <span style={{fontSize:11}}>Filter</span>
                            <ul className={styles.leftHomeContentWrapperUl} style={{listStyleType: "none" ,padding:0, marginTop:5, marginBottom:0}}>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                            </ul>

                        </div>

                        <div className={styles.leftHomeContentWrapperMiddle}>
                            <span style={{fontSize:11}}>Filter</span>
                            <ul className={styles.leftHomeContentWrapperUl} style={{listStyleType: "none" ,padding:0, marginTop:5, marginBottom:0}}>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>FilterFilterFilterFilter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter Filter Filter Filter Filter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>FilterFilterFilterFilter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter Filter Filter Filter Filter</label></li>
                            </ul>

                        </div>


                        <div className={styles.leftHomeContentWrapperMiddle}>
                            <span style={{fontSize:11}}>Filter</span>
                            <ul className={styles.leftHomeContentWrapperUl} style={{listStyleType: "none" ,padding:0, marginTop:5, marginBottom:0}}>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Accept Terms</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Accept Terms and Conditions</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Accept Terms and Conditions</label></li>
                            </ul>

                        </div>


                        <div className={styles.leftHomeContentWrapperMiddle}>
                            <span style={{fontSize:11}}>Filter</span>
                            <ul className={styles.leftHomeContentWrapperUl} style={{listStyleType: "none" ,padding:0, marginTop:5, marginBottom:0}}>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                            </ul>

                        </div>

                        <div className={styles.leftHomeContentWrapperMiddle}>
                            <span style={{fontSize:11}}>Filter</span>
                            <ul className={styles.leftHomeContentWrapperUl} style={{listStyleType: "none" ,padding:0, marginTop:5, marginBottom:0}}>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>FilterFilterFilterFilter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter Filter Filter Filter Filter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>FilterFilterFilterFilter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter Filter Filter Filter Filter</label></li>
                            </ul>

                        </div>

                        <div className={styles.leftHomeContentWrapperMiddle}>
                            <span style={{fontSize:11}}>Filter</span>
                            <ul className={styles.leftHomeContentWrapperUl} style={{listStyleType: "none" ,padding:0, marginTop:5, marginBottom:0}}>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>FilterFilterFilterFilter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter Filter Filter Filter Filter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>FilterFilterFilterFilter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter Filter Filter Filter Filter</label></li>
                            </ul>

                        </div>

                        <div className={styles.leftHomeContentWrapperMiddle}>
                            <span style={{fontSize:11}}>Filter</span>
                            <ul className={styles.leftHomeContentWrapperUl} style={{listStyleType: "none" ,padding:0, marginTop:5, marginBottom:0}}>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>FilterFilterFilterFilter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter Filter Filter Filter Filter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter</label></li>
                                <li> <input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>FilterFilterFilterFilter</label></li>
                                <li><input onChange={() => setIsChecked(!isChecked)}  type="checkbox" checked={isChecked} style={{verticalAlign: "middle"}} />
                                    <label style={{color:"#BDBDBD", textDecoration:"none", fontSize:10, marginBottom:0}}>Filter Filter Filter Filter Filter</label></li>
                            </ul>

                        </div>
                    </div>


                    <div className={`col-md-10 col-10 ${styles.middleHomeContentWrapper}`}>
                        <div className={styles.homeContentWrapperContentBox}>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>

                        </div>

                    </div>

                   {/* <div className={`col-md-2 col-2 ${styles.rightHomeContentWrapper}`}>
                    </div>*/}

                </div>

            </div>


        </div>
    )
}

export default Home