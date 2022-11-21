import Web3 from 'web3';
let url = window.ethereum;
const web3 = new Web3(url);

let selectedAccount = web3.eth.getAccounts()
console.log("lotto web3", selectedAccount)

export const getWavax = async () => {
  const avaxAdd ='0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7';
  const avaxAbi = [
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"src",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"guy",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"wad",
            "type":"uint256"
         }
      ],
      "name":"Approval",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"wad",
            "type":"uint256"
         }
      ],
      "name":"Deposit",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"src",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"wad",
            "type":"uint256"
         }
      ],
      "name":"Transfer",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"src",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"wad",
            "type":"uint256"
         }
      ],
      "name":"Withdrawal",
      "type":"event"
   },
   {
      "payable":true,
      "stateMutability":"payable",
      "type":"fallback"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "name":"allowance",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"guy",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"wad",
            "type":"uint256"
         }
      ],
      "name":"approve",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "name":"balanceOf",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"decimals",
      "outputs":[
         {
            "internalType":"uint8",
            "name":"",
            "type":"uint8"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"deposit",
      "outputs":[
         
      ],
      "payable":true,
      "stateMutability":"payable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"name",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"symbol",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"totalSupply",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"wad",
            "type":"uint256"
         }
      ],
      "name":"transfer",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"src",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"wad",
            "type":"uint256"
         }
      ],
      "name":"transferFrom",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"wad",
            "type":"uint256"
         }
      ],
      "name":"withdraw",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   }
   ];
   const avaxContract = new web3.eth.Contract(avaxAbi, avaxAdd);
  return avaxContract.methods.balanceOf('0xE193eBc63Bf0251AB62Ef5a3b1E3a98232a1cbF1').call();
};
 

export const getEntries = async () => {
	const lottoAddress = '0x44De21e9Ad936418dFb628d80101b1F681AAA049';
    const lotteryAbi = [
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
    const lottoContract = new web3.eth.Contract(lotteryAbi, lottoAddress)
    
    console.log('lottery')
    return web3.lottoContract.methods.getPlayers().call();

};





