import Web3 from 'web3';
const url = window.ethereum;
const web3 = new Web3(url);
const lottoAdd ="0x44De21e9Ad936418dFb628d80101b1F681AAA049";
const testLottoAdd = "0x201BAF34Fe925daA34ce647C7A3C801B1AEdB5a5";
const lottoAbi = [
	{
		"inputs": [],
		"name": "enter",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "enterPlayer",
		"outputs": [],
		"stateMutability": "payable",
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
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
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
		"name": "size",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const lottoContract = new web3.eth.Contract(lottoAbi, lottoAdd);
const testLottoContract = new web3.eth.Contract(lottoAbi, testLottoAdd);
let user;

web3.eth.getAccounts(function(err, accounts){
   user = accounts[0];
})

let wei = 100000000000000000;
let totalGasLimit = 100000;
let totalCostWei = '100000000000000000';




export const Cost = async (props) => {
   return lottoContract.methods.entryCost().call();
};

export const getEntries = async () => {
   return lottoContract.methods.getPlayers().call();
 };

 export const getEntered = async () => {
   return lottoContract.methods.playerCount().call();
 };

 export const getId = async () => {
   return lottoContract.methods.lotteryId().call();
 };

 export const getBal = async () => {
   return lottoContract.methods.getBalance().call();
 };

 
 export const enterLotto = (props) => {
   console.log( "rpe hash")
   lottoContract.methods
      .enter()
      .send({
        from: user,
        value: '100000000000100000',
        gasLimit: '80000',
        
      }, function(error, transactionHash){
      console.log(transactionHash, "tsxn hash")
  });;
 };

 export const pickWinner = (props) => {
	console.log( "rpe hash")
	lottoContract.methods
	   .pickWinner()
	   .send({
		 from: user,
		 gasLimit: '80000',
		 
	   }, function(error, transactionHash){
	   console.log(transactionHash, "tsxn hash")
   });;
  };



