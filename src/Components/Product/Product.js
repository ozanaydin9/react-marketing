import React, {useState} from "react";
import styles from './Product.module.css';
import Header from "../Header/Header";
import SubHeader from "../SubHeader/SubHeader";
import Card from "../Card/Card";
import productImg from "../../images/productImg.svg";


const Product = () => {


    return (
        <div className={`container-fluid ${styles.productMain}`}>
            <Header />

            <SubHeader />

            <div className={`container-fluid`}>
                <div className={`row ${styles.rowContainerHeaderBreadcrumbAndFilterBox}`}>
                    <div className={`col-md-12 col-12 ${styles.containerHeaderBreadcrumbAndFilterBox}`}>

                        <ul className={styles.breadcrumb}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Computers</a></li>
                            <li>Apple</li>
                        </ul>

                    </div>



                </div>

            </div>

            <div className={`container-fluid ${styles.productContentWrapper}`}>
                <div className={`row ${styles.rowProductContentWrapper}`}>
                    <div className={`col-md-6 col-6 ${styles.leftProductContentWrapper}`}>
                        <div className={styles.leftProductContentWrapperContentBox}>
                            <div className={styles.leftProductContentWrapperContentBoxImageArea}>
                                <img style={{width:"100%", height:"100%", objectFit:"contain"}} src={productImg} alt="login"/>
                            </div>
                            <div><hr className={styles.horizontalLine} style={{margin:0, padding:"5px 0px"}}/></div>
                            <div className={styles.leftProductContentWrapperContentBoxSpecificationsArea}>
                            </div>
                        </div>

                    </div>


                    <div className={`col-md-6 col-6 ${styles.rightProductContentWrapper}`}>
                        <div className={styles.rightProductContentWrapperContentBox}>

                                Descr
                        </div>

                    </div>


                </div>

                <div className={`row ${styles.rowProductOtherProducts}`}>
                    <div className={`col-md-12 col-12 ${styles.otherProductsContentWrapper}`}>
                        <div className={styles.otherProductsContentWrapperContentBox}>
                            <p style={{margin:0, paddingLeft:10}}>Similar Products</p>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>

                    </div>

                </div>
                <div className={`row ${styles.rowProductSpecifications}`}>
                    <div className={`col-md-12 col-12 ${styles.rowProductSpecificationsContentWrapper}`}>
                        <div className={styles.rowProductSpecificationsContentWrapperContentBox}>
                            <p style={{margin:0, paddingLeft:10}}>Specifications</p>
                        </div>

                    </div>

                </div>

                <div className={`row ${styles.rowProductComments}`}>
                    <div className={`col-md-12 col-12 ${styles.rowProductCommentsContentWrapper}`}>
                        <div className={styles.rowProductCommentsContentWrapperContentBox}>
                            <p style={{margin:0, paddingLeft:10}}>Comments</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Product