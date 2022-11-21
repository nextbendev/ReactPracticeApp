import React, {useState, useEffect} from 'react';
import NftCard from './components/UI/NftCard'
import {init, getNftBalance, getAvax, getWavax, getAccount, getEntries} from './components/Web3/Web3Client'
import Navbar from './components/UI/Navbar';
import Button from './components/UI/Button';
import AccountInfo from './components/UI/AcountInfo';
import logo from './logo.png'



function App() {
  const [balance, setBalance] = useState(0);
  const [wavaxBalance, setWavaxBalance] = useState(0);
  const [userAccount, setUserAccount] = useState();
  const [usersList, setUsersList] = useState([]);
  const [nftBalance, setNftBalance] = useState([]);
  const [lottoEntries, setLottoEntries] = useState(0);
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
      console.log('not working', nftBalance)
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
    console.log('entries', lottoEntries)
  }
  

  const tokenBalance = [
    {
      tokenName: '',
      tokenAddress: '',
      tokenAbi: '',
    },
  ]

 

  let picId = nftBalance[0];
  
 
  console.log("entries",lottoEntries)
  
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
          wavax={wavaxBalance *.000000000000000001}
          avax={balance * .000000000000000001}
          user={userAccount}
          lottoEntries={lottoEntries}
         />
          
          <div class="col-sm-8">
            <h2>Play CryptoBroski Luck!</h2>
            
            <h5></h5>
            <div class="fakeimg"></div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

            
          </div>
        </div>
      </div>

      <div class="mt-5 p-4 bg-dark text-white text-center">
        <p>Footer</p>
      </div>
    </body>

  );
}

export default App;
