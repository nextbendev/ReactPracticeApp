import React, {useState, useEffect} from 'react';
import NftCard from './components/UI/NftCard'
import {init,  getAvax, getWavax, getAccount, getNftBalance} from './components/Web3/Web3Client';
import Navbar from './components/UI/Navbar';
import Button from './components/UI/Button';
import Footer from './components/UI/Footer';
import AccountInfo from './components/UI/AcountInfo';
import logo from './logo.png';
import Game from './components/UI/Game';
import {Cost, getEntries, getEntered, getId, getBal, enterLotto, pickWinner} from './components/Web3/Lotto';
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
  const [nftDisp, setNftDisp] =  useState(false);
  const [lottoDisp, setLottoDisp] = useState(false);
  const [entered, setEntered] = useState(false);

  const [nftData, setNftData] = useState({
    NFT_NAME:"CryptoBroskis",
    NFT_ID:"1",
    NFT_IMAGE:"https://cryptobroskis.com/cryptobroskis/avaxImg/",
    NFT_DESC:"",
    JOEPEGS_LINK:"https://joepegs.com/collections/0xeb4f5d458b135a8993239f91ab3f45ab92cd519e",
  });
  const enter = () => {
    enterLotto().then(tx => {
      setEntered(true);
      console.log(tx, "tx");
    }).catch(err => {
      console.log(err);
    })
  };

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

  let dispNft = () => setNftDisp(true);
  let hideNft = () => setNftDisp(false);
  let dispLotto = () => setLottoDisp(true);
  let hideLotto = () => setLottoDisp(false);
  let picId = nftBalance[0];
  

  useEffect(() => {
     init();
  });

  return (
    <div>
      <div class="p-5 bg-primary text-white text-center header">
        <img src={logo}  height={200}></img>
      </div>
      <Navbar
        balanceGroup={balanceGroup}
        dispNft={dispNft}
        hideNft={hideNft}
        dispLotto={dispLotto}
        hideLotto={hideLotto}
        nftDisp={nftDisp}
        lottoDisp={lottoDisp}
        nftBalance={nftBalance.length}

      />
      <div class="container mt-5">
        <div class="row">
          <AccountInfo
            nftCount={nftBalance.length}
            nftId={picId}
            wavax={wavaxBalance * .000000000000000001}
            avax={balance * .000000000000000001}
            user={userAccount}
            lottoEntries={lottoEntries}
          />
        <div class="col-sm-8">
          {lottoDisp === true &&
          <Game
            cost={lottoCost * .000000000000000001}
            size={lottoSize}
            lottoEntries={lottoEntries}
            round={lottoId}
            pot={lottoBal}
            enterLotto={enterLotto}
            entered={entered}
            enter={enter}
            user={userAccount}
            pickWinner={pickWinner}
          > </Game>}
        </div>
        </div>

      </div>

      {nftDisp === true &&
      <NftCard
        nftId={nftBalance}
      ></NftCard>}
    </div>
  );
}

export default App;
