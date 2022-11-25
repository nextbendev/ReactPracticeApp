import React from "react";
import styles from './AccountInfo.module.css'

const AccountInfo = (props) => {
  console.log('props', props);
  
  
  
  
    return(
        <div class="col-sm-4">  
            {props.user === undefined && <h2>Not logged in</h2>}
            {props.user !== undefined && <h2>Wallet:0x...{props.user.substring(36, 42)} </h2>}
            <p ></p>
                <div className={styles.container}> 
                  <div>
                    <img src={`https://cryptobroskis.com/cryptobroskis/avaxImg/${props.nftId}.png`} className={styles.nft}></img>
                    </div>
                    <div>
                      
                      <ul className={styles.list}>
                        <li> AVAX:{props.avax.toFixed(3)}</li>
                        <li> WAVAX:{props.wavax.toFixed(3)}</li>
                        <li> CBSKI: 0</li>
                        <li>CB's Owned: {props.nftCount}</li>
                        
                     </ul>
                    </div>  
                  
                </div>
                
                
           
            
            <h3 class="mt-4">extra area</h3>
            <ul>
              
            </ul>
            <hr class="d-sm-none"></hr>
          </div>
    )
};

export default AccountInfo;