import React, {useState, useEffect} from 'react';
import NftCard from './components/UI/NftCard'
import {init, getNftBalance, getAvax} from './components/Web3/Web3Client'
import Navbar from './components/UI/Navbar';
import Button from './components/UI/Button';
import AccountInfo from './components/UI/AcountInfo';
import logo from './logo.png'






function App() {
  const [balance, setBalance] = useState(0);
  const [userAccount, setUserAccount] = useState();
  const [usersList, setUsersList] = useState([]);
  const [nftBalance, setNftBalance] = useState([]);
  const [nftData, setNftData] = useState({
    NFT_NAME:"CryptoBroskis",
    NFT_ID:"1",
    NFT_IMAGE:"https://cryptobroskis.com/cryptobroskis/avaxImg/",
    NFT_DESC:"",
    JOEPEGS_LINK:"https://joepegs.com/collections/0xeb4f5d458b135a8993239f91ab3f45ab92cd519e",
  });
  


  useEffect(() => {
    init();
  }, [])




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
  const fetchNfts = () => {
    getNftBalance().then(nftBalance => {
      setNftBalance(nftBalance);
      console.log('not working', nftBalance)
    }).catch(err => {
      console.log(err);
    })
  };

  const tokenBalance = [
    {
      tokenName: '',
      tokenAddress: '',
      tokenAbi: '',
    },
  ]

 

  let picId = nftBalance[0];
  

 

  return (
    <body>
      <div class="p-5 bg-primary text-white text-center header">
        <img src={logo}  height={200}></img>
       
      </div>

      <div class="container mt-5">
        <div class="row">
        <AccountInfo nftId={picId} getNfts={fetchNfts} getBal={fetchBalance} wavax={balance * .00000000000000001}/>
          
          <div class="col-sm-8">
            <h2>TITLE HEADING {nftBalance}</h2>
            
            <h5>Title description, Dec 7, 2020</h5>
            <div class="fakeimg">Fake Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

            <h2 class="mt-5">TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2020</h5>
            <div class="fakeimg">Fake Image</div>
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
