import * as React from 'react';
import style from "./NftCard.module.css"




export default function NftCard(props) {
    
  return (
    <div className={style.container}>
        <div className={ style.main }>
            <div className={style.a}> 
            nft image               
            </div>

            <div className={style.b}>
                <div className={style.c}>Info</div>
                <div className={style.d}>Buttons</div>
            </div>
        </div>
        <div className={ style.main }>
            <div className={style.a}> 
            nft image               
            </div>

            <div className={style.b}>
                <div className={style.c}>Info</div>
                <div className={style.d}>Buttons</div>
            </div>
        </div>
        <div className={ style.main }>
            <div className={style.a}> 
            nft image               
            </div>

            <div className={style.b}>
                <div className={style.c}>Info</div>
                <div className={style.d}>Buttons</div>
            </div>
        </div>
        <div className={ style.main }>
            <div className={style.a}> 
            nft image               
            </div>

            <div className={style.b}>
                <div className={style.c}>Info</div>
                <div className={style.d}>Buttons</div>
            </div>
        </div>
        <div className={ style.main }>
            <div className={style.a}>

            </div>
            <div className={style.b}>
                <div className={style.c}>L2</div>
                <div className={style.d}>L3</div>
            </div>
            
        </div>
        <div className={ style.main }>
            <div className={style.a}>

            </div>
            <div className={style.b}>
                <div className={style.c}>L2</div>
                <div className={style.d}>L3</div>
            </div>
            
        </div>
   </div>
  );
}

