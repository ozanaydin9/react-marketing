import React from "react";
import styles from './Card.module.css';
import productImg from "../../images/productImg.svg";
import star from "../../images/star.svg";
import {Link} from "react-router-dom";


const Card = () => {
    return (

            <div className={styles.cardMain}>
                <Link to="/product">
                <div className={styles.cardImageArea}>
                    <img className={styles.cardImage} src={productImg} title="Login" alt="login"/>

                </div>
                <div><hr className={styles.horizontalLine}/></div>
                <div className={styles.cardProductArea}>
                    <p className={styles.cardProductAreaProductBrand}> Apple </p>
                    <p className={styles.cardProductAreaProductDetails}> Apple MacBook Air Intel Core i5 5350U </p>

                </div>
                <div><hr className={styles.horizontalLine} style={{height:3}}/></div>
                <div className={styles.cardStarArea}>
                    <img className={styles.cardStar} src={star} />
                    <img className={styles.cardStar} src={star} />
                    <img className={styles.cardStar} src={star} />
                    <img className={styles.cardStar} src={star} />
                    <img className={styles.cardStar} src={star} />
                </div>
                <div className={styles.cardPriceArea}>6.392,00 TL</div>
                <div className={styles.cardGoToProduct}>Go to Product</div>
        </Link>
            </div>

    )
}

export default Card