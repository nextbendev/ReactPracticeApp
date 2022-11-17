import React from "react";
import styles from './Navbar.module.css'

const Navbar = (props) => {
    return(
        <div className={styles.topnav}>
            <a classname={styles.active} href="#home">Home</a>
            <a href="#news">About</a>
            <a href="#contact">Contract</a>            
        </div>
    )
};

export default Navbar;