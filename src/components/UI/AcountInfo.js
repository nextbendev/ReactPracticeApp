import React from "react";
import styles from './AccountInfo.module.css'

const AccountInfo = (props) => {
  console.log('props', props);
  const renderLotto = (lottoEntries) => {
    return props.lottoEntries.map(entry => <li key={entry.toString()}>0x...{entry.substring(36, 42)}</li>)
  }
  
  
  
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
                        <li>CB NFT's Owned: {props.nftCount}</li>
                        
                     </ul>
                    </div>  
                  
                </div>
                <button class="nav-link active" onClick={props.balanceGroup}>Refesh Wallet</button>
          <button class="nav-link active" onClick={props.dispNft}>Disp Nft</button>
          <button class="nav-link active" onClick={props.hideNft}>Hde Nft</button>
          <button class="nav-link active" onClick={props.dispLotto}>Disp Lotto</button>
          <button class="nav-link active" onClick={props.hideLotto}>Hde Lotto</button>
                
           
            
            <h3 class="mt-4">Game Entrants</h3>
            <ul>
              {props.lottoEntries !== 0 && <li>{renderLotto(props.lottoEntries)}</li>}
            </ul>
            <hr class="d-sm-none"></hr>
          </div>
    )
};

export default AccountInfo;