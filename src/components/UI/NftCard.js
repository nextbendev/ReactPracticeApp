import * as React from 'react';
import style from "./NftCard.module.css"




export default function NftCard(props) {
  const nfts = props.nftId.map((nft) =>
  <a key={nft.toString()} href={`https://joepegs.com/item/0xeb4f5d458b135a8993239f91ab3f45ab92cd519e/${nft}/`} target="_blank" rel="noreferrer noopener">
  <img src={`https://cryptobroskis.com/cryptobroskis/joepegsImg/${nft}.png`} className={style.nft} alt="..."></img>
  
  </a>
  );
  
  
  return (
    <div className={style.container}>
        <div className={ style.main }>
            <div className={style.a}> 
            {props.nftId.length > 0 && <ul key={props}> {nfts}</ul>}
                      
            </div>

            
        </div>
        
   </div>
  );
}

