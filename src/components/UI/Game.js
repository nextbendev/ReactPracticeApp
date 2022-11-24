import React from "react";
import styles from './Game.css';

const Game = (props) => {
    let playerLeft = props.size - props.entered;
    let futureEntry =( playerLeft * props.cost);
    let potInt = parseInt(props.pot) * .000000000000000001;
    let totalPot = (potInt + futureEntry);
    return(         
        <div>
            <h2>Play CryptoBroski Luck!</h2>
            
            <div class="fakeimg containerGame">
                <div class="details">
                    <h5>Round #{props.round} Info</h5> 
                    <p>Cost: {props.cost} AVAX</p>
                    <p> entered:{props.entered}/{props.size}</p>
                </div>
                <div class="prize">
                    <h5>Prize Pool: {totalPot} AVAX</h5>
                    <p>1st {totalPot * .6}</p>
                    <p>2nd {totalPot * .3}</p>
                    <p>3rd {totalPot * .1}</p>
                </div>
            </div>
            <button>Play</button><button>Call Winner</button>
        </div>
    )
};

export default Game;