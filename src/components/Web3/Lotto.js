import Web3 from 'web3';

let url = window.ethereum;
const web3 = new Web3(url);
let lottoAdd = '0x44De21e9Ad936418dFb628d80101b1F681AAA049';




export const Cost = async (props) => {

    const lottoAbi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "cbPool",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "enter",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "entryCost",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPlayers",
            "outputs": [
                {
                    "internalType": "address payable[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "lottery",
                    "type": "uint256"
                }
            ],
            "name": "getWinnerByLottery",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "lotteryHistory",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "lotteryId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pickWinner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "playerCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "players",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "resetGame",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_cbPool",
                    "type": "address"
                }
            ],
            "name": "setCbPool",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_entryCost",
                    "type": "uint256"
                }
            ],
            "name": "setEntryCost",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_playerCount",
                    "type": "uint256"
                }
            ],
            "name": "setPlayerCount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ];
    const lottoAdd = '0x44De21e9Ad936418dFb628d80101b1F681AAA049';
    const lottoContract = new web3.eth.Contract(lottoAbi, lottoAdd);
   return lottoContract.methods.entryCost().call();
};

export const getEntries = async () => {

   const lottoAdd ='0x44De21e9Ad936418dFb628d80101b1F681AAA049';
   const lottoAbi = [
    {
       "inputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "inputs":[

       ],
       "name":"cbPool",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"enter",
       "outputs":[

       ],
       "stateMutability":"payable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"entryCost",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getBalance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getPlayers",
       "outputs":[
          {
             "internalType":"address payable[]",
             "name":"",
             "type":"address[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"lottery",
             "type":"uint256"
          }
       ],
       "name":"getWinnerByLottery",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"lotteryHistory",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"lotteryId",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"pickWinner",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"playerCount",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"players",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"resetGame",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_cbPool",
             "type":"address"
          }
       ],
       "name":"setCbPool",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_entryCost",
             "type":"uint256"
          }
       ],
       "name":"setEntryCost",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_playerCount",
             "type":"uint256"
          }
       ],
       "name":"setPlayerCount",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "stateMutability":"payable",
       "type":"receive"
    }
 ];
    const lottoContract = new web3.eth.Contract(lottoAbi, lottoAdd);
   return lottoContract.methods.getPlayers().call();
 };

 export const getEntered = async () => {

   const lottoAdd ='0x44De21e9Ad936418dFb628d80101b1F681AAA049';
   const lottoAbi = [
    {
       "inputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "inputs":[

       ],
       "name":"cbPool",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"enter",
       "outputs":[

       ],
       "stateMutability":"payable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"entryCost",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getBalance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getPlayers",
       "outputs":[
          {
             "internalType":"address payable[]",
             "name":"",
             "type":"address[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"lottery",
             "type":"uint256"
          }
       ],
       "name":"getWinnerByLottery",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"lotteryHistory",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"lotteryId",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"pickWinner",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"playerCount",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"players",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"resetGame",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_cbPool",
             "type":"address"
          }
       ],
       "name":"setCbPool",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_entryCost",
             "type":"uint256"
          }
       ],
       "name":"setEntryCost",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_playerCount",
             "type":"uint256"
          }
       ],
       "name":"setPlayerCount",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "stateMutability":"payable",
       "type":"receive"
    }
 ];
    const lottoContract = new web3.eth.Contract(lottoAbi, lottoAdd);
   return lottoContract.methods.playerCount().call();
 };

 export const getId = async () => {

   const lottoAdd ='0x44De21e9Ad936418dFb628d80101b1F681AAA049';
   const lottoAbi = [
    {
       "inputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "inputs":[

       ],
       "name":"cbPool",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"enter",
       "outputs":[

       ],
       "stateMutability":"payable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"entryCost",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getBalance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getPlayers",
       "outputs":[
          {
             "internalType":"address payable[]",
             "name":"",
             "type":"address[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"lottery",
             "type":"uint256"
          }
       ],
       "name":"getWinnerByLottery",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"lotteryHistory",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"lotteryId",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"pickWinner",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"playerCount",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"players",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"resetGame",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_cbPool",
             "type":"address"
          }
       ],
       "name":"setCbPool",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_entryCost",
             "type":"uint256"
          }
       ],
       "name":"setEntryCost",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_playerCount",
             "type":"uint256"
          }
       ],
       "name":"setPlayerCount",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "stateMutability":"payable",
       "type":"receive"
    }
 ];
    const lottoContract = new web3.eth.Contract(lottoAbi, lottoAdd);
   return lottoContract.methods.lotteryId().call();
 };

 export const getBal = async () => {

   const lottoAdd ='0x44De21e9Ad936418dFb628d80101b1F681AAA049';
   const lottoAbi = [
    {
       "inputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "inputs":[

       ],
       "name":"cbPool",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"enter",
       "outputs":[

       ],
       "stateMutability":"payable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"entryCost",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getBalance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getPlayers",
       "outputs":[
          {
             "internalType":"address payable[]",
             "name":"",
             "type":"address[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"lottery",
             "type":"uint256"
          }
       ],
       "name":"getWinnerByLottery",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"lotteryHistory",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"lotteryId",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"pickWinner",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"playerCount",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"players",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"resetGame",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_cbPool",
             "type":"address"
          }
       ],
       "name":"setCbPool",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_entryCost",
             "type":"uint256"
          }
       ],
       "name":"setEntryCost",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_playerCount",
             "type":"uint256"
          }
       ],
       "name":"setPlayerCount",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "stateMutability":"payable",
       "type":"receive"
    }
 ];
    const lottoContract = new web3.eth.Contract(lottoAbi, lottoAdd);
   return lottoContract.methods.getBalance().call();
 };


 export const pickWinner= async () => {
   let gasLimit = '76000';

   const lottoAdd ='0x44De21e9Ad936418dFb628d80101b1F681AAA049';
   const lottoAbi = [
    {
       "inputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "inputs":[

       ],
       "name":"cbPool",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"enter",
       "outputs":[

       ],
       "stateMutability":"payable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"entryCost",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getBalance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"getPlayers",
       "outputs":[
          {
             "internalType":"address payable[]",
             "name":"",
             "type":"address[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"lottery",
             "type":"uint256"
          }
       ],
       "name":"getWinnerByLottery",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"lotteryHistory",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"lotteryId",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"pickWinner",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"playerCount",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"players",
       "outputs":[
          {
             "internalType":"address payable",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[

       ],
       "name":"resetGame",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"_cbPool",
             "type":"address"
          }
       ],
       "name":"setCbPool",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_entryCost",
             "type":"uint256"
          }
       ],
       "name":"setEntryCost",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"_playerCount",
             "type":"uint256"
          }
       ],
       "name":"setPlayerCount",
       "outputs":[

       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "stateMutability":"payable",
       "type":"receive"
    }
 ];
    const lottoContract = new web3.eth.Contract(lottoAbi, lottoAdd);
   return lottoContract.methods.enterPlayer().send({
      gasLimit: gasLimit,
      to: lottoAdd,
      from: web3.account,
   })
   .once('error', (err) => {
      console.log(err);
   })
   .then((receipt) => {
      console.log(receipt)
   });
 };
