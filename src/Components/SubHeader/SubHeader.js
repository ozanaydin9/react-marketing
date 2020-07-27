import React from "react";
import styles from './SubHeader.module.css';


const SubHeader = () => {
    return (
        <div className={`container-fluid ${styles.subHeaderMain}`}>
            <div className={`row ${styles.rowSubHeader}`}>
                <div className={styles.navbar}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Kadın
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Erkek
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Çocuk
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Ev&Yaşam
                        </button>
                        <div className={styles.dropdowncontent}>
                            <ul>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </ul>
                            <ul>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </ul>

                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Kozmetik
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Ayakkabı&Çanta
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Saat&Aksesuar
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Electronics
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Diğer
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                </div>
                <div className={styles.headerHorizontalLine}><hr className={styles.horizontalLine}/></div>
            </div>
        </div>
    )
}

export default SubHeader