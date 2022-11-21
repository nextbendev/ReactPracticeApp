import React, {useState, useEffect} from 'react';
import NftCard from './components/UI/NftCard'
import {init,  getAvax, getWavax, getAccount, getNftBalance} from './components/Web3/Web3Client';
import Navbar from './components/UI/Navbar';
import Button from './components/UI/Button';
import AccountInfo from './components/UI/AcountInfo';
import logo from './logo.png';
import Game from './components/UI/Game';
import {Cost, getEntries, getEntered, getId, getBal} from './components/Web3/Lotto';
import {maxSupply} from './components/Web3/CbNft'



function App() {
  const [balance, setBalance] = useState(0);
  const [wavaxBalance, setWavaxBalance] = useState(0);
  const [userAccount, setUserAccount] = useState();
  const [usersList, setUsersList] = useState([]);
  const [nftBalance, setNftBalance] = useState([]);
  const [lottoEntries, setLottoEntries] = useState(0);
  const [lottoCost, setLottoCost] = useState(0);
  const [lottoSize, setLottoSize] = useState(0);
  const [lottoId, setLottoId] = useState(0);
  const [lottoBal, setLottoBal] = useState(0);

  const [nftData, setNftData] = useState({
    NFT_NAME:"CryptoBroskis",
    NFT_ID:"1",
    NFT_IMAGE:"https://cryptobroskis.com/cryptobroskis/avaxImg/",
    NFT_DESC:"",
    JOEPEGS_LINK:"https://joepegs.com/collections/0xeb4f5d458b135a8993239f91ab3f45ab92cd519e",
  });
    
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList,
         {name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const fetchLottoCost = () => {
    Cost().then(lottoCost => {
      setLottoCost(lottoCost);
    }).catch(err => {
      console.log(err);
    })
  };
  const fetchBalance = () => {
    getAvax().then(balance => {
      setBalance(balance);
    }).catch(err => {
      console.log(err);
    })
  };
  const lottoUsers = () => {
    getEntries().then(lottoEntries => {
      setLottoEntries(lottoEntries);
    }).catch(err => {
      console.log(err);
    })
  };
  const fetchWavaxBalance = () => {
    getWavax().then(wavaxBalance => {
      setWavaxBalance(wavaxBalance);
    }).catch(err => {
      console.log(err);
    })
  };
  const getUser = () => {
    getAccount().then(userAccount => {
      setUserAccount(userAccount);
    }).catch(err => {
      console.log(err);
    })
  };
  const fetchNfts = () => {
    getNftBalance().then(nftBalance => {
      setNftBalance(nftBalance);
    }).catch(err => {
      console.log(err);
    })
  };
  const fetchSize = () => {
    getEntered().then(lottoSize => {
      setLottoSize(lottoSize);
    }).catch(err => {
      console.log(err);
    })
  };
  const fetchId = () => {
    getId().then(lottoId => {
      setLottoId(lottoId);
    }).catch(err => {
      console.log(err);
    })
  };
  const fetchBal = () => {
    getBal().then(lottoBal => {
      setLottoBal(lottoBal);
    }).catch(err => {
      console.log(err);
    })
  };

  
  const balanceGroup = () => {
    init();
    fetchBalance();
    fetchWavaxBalance();
    fetchNfts();
    getUser();
    lottoUsers();
    fetchLottoCost();
    fetchSize();
    fetchId();
    fetchBal();
  }
  

  const tokenBalance = [
    {
      tokenName: '',
      tokenAddress: '',
      tokenAbi: '',
    },
  ]
  let picId = nftBalance[0];
  console.log("entries",lottoBal)
  
  useEffect(() => {
     init();
  });

  return (
    <body>
      <div class="p-5 bg-primary text-white text-center header">
        <img src={logo}  height={200}></img>
      </div>
      <div class="container mt-5">
        <div class="row">
        <AccountInfo 
          nftCount={nftBalance.length}
          nftId={picId} 
          balanceGroup={balanceGroup}
          wavax={wavaxBalance * .000000000000000001}
          avax={balance * .000000000000000001}
          user={userAccount}
          lottoEntries={lottoEntries}
         />
        <div class="col-sm-8">
        <Game
          cost={lottoCost * .000000000000000001}
          size={lottoSize}
          entered={lottoEntries.length}
          round={lottoId}
          pot={lottoBal}
        > </Game>
        
        </div>
       
        </div>
        
      </div>
   

 
    </body>

  );
}

export default App;
