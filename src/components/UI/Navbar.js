import React from "react";
import styles from './Navbar.module.css'

const Navbar = (props) => {

    console.log(props.nftBalance, "props nfgt abal")
    return(
        <div className={styles.topnav}>
            {props.nftBalance > 0 
                ? <a class="nav-link active btn" onClick={props.balanceGroup}>Reload Profile</a>
                : <a class="nav-link active btn" onClick={props.balanceGroup}>Load Profile</a>}
            {props.nftDisp 
                ? <a class="nav-link active btn" onClick={props.hideNft}>Bye CB Nft's</a>
                : <a class="nav-link active btn" onClick={props.dispNft}>My CB Nft's</a>}
            {!props.lottoDisp 
                ? <a class="nav-link active btn" onClick={props.dispLotto}>Lotto</a>
                : <a class="nav-link active btn" onClick={props.hideLotto}>Close Lotto</a>}
        </div>
        
    )
};

export default Navbar;