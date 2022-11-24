import * as React from 'react';
import style from "./NftCard.module.css"




export default function NftCard(props) {
  const nfts = props.nftId.map((nft) =>
  <img src={`https://cryptobroskis.com/cryptobroskis/avaxImg/${nft}.png`} className={style.nft} alt="..."></img>
  );
  
  console.log(props.nftId)
  return (
    <div className={style.container}>
        <div className={ style.main }>
            <div className={style.a}> 
            {props.nftId.length > 0 && <ul> {nfts}</ul>}
                      
            </div>

            
        </div>
        
   </div>
  );
}

