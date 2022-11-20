import React, {useEffect} from "react";
import styles from './AccountInfo.module.css'
let Web3 = require('web3');
let url = window.ethereum;
let web3 = new Web3(url);
let account =web3.eth.accounts

const AccountInfo = (props) => {
  console.log('not working', account)
  console.log(props, 'props')
    return(
        <div class="col-sm-4">
            <h2>Wallet Info</h2>
                <div className={styles.container}> 
                  <div>
                    <img src={`https://cryptobroskis.com/cryptobroskis/avaxImg/${props.nftId}.png`} className={styles.nft}></img>
                    </div>
                    <div>
                      <p className={styles.info}>Account</p>
                      <ul>
                        <li> WAVAX:{props.wavax}</li>
                        
                     </ul>
                    </div>  
                  
                </div>
            <p>Thank you for being a member</p>
            <h3 class="mt-4">Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <button class="nav-link active" onClick={props.getNfts}>Refresh</button>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={props.getBal}>Balance</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <hr class="d-sm-none"></hr>
          </div>
    )
};

export default AccountInfo;