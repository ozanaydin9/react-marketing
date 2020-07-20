import React from "react";
import styles from './SubHeader.module.css';


const SubHeader = () => {
    return (
        <div className={`container-fluid ${styles.subHeaderMain}`}>
            <div className={`row ${styles.rowSubHeader}`}>
                <div className={styles.headerHorizontalLine}><hr className={styles.horizontalLine}/></div>
            </div>
        </div>
    )
}

export default SubHeader