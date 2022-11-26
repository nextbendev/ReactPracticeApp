import * as React from 'react';
import style from "./NftCard.module.css"




export default function NftCard(props) {
  const nfts = props.nftId.map((nft) =>
  <a href={`https://joepegs.com/item/0xeb4f5d458b135a8993239f91ab3f45ab92cd519e/${nft}/`} target="_blank" rel="noreferrer noopener">
  <img src={`https://cryptobroskis.com/cryptobroskis/avaxImg/${nft}.png`} className={style.nft} alt="..."></img>
  </a>
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

