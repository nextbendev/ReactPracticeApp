import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import AddUser from './components/Users/AddUser';
import UserList from "./components/Users/UserList";
import Nfts from './components/UI/Nfts'
import {init, getOwnBalance} from './Web3Client'
import Navbar from './components/UI/Navbar';

function App() {
  const [balance, setBalance] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [nftBalance, setNftBalance] = useState([]);
  
  useEffect(() => {
    init();     
  }, [])

  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString() }]
    });
  };

  const fetchBalance = () => {
    getOwnBalance().then(nftBalance => {
      setNftBalance(nftBalance);
      console.log('not working', nftBalance)
    }).catch(err => {
      console.log(err);
    })
  };

  const Nfts = nftBalance.map((nft) =>
  <li>{nft}</li>
  );



  return (
    <body class="top">
      <Navbar></Navbar>
      <header class="header">
        
      </header>
      <div class="body">
        <main class="content">Main</main>
        <nav class="nav">Nav</nav>
        <aside class="ads">
          <button onClick={fetchBalance}>nfts</button>
          Nfts: <ul>{nftBalance.map(nft => (
            <li key={nft}>{nft}</li>
          ))}
          </ul>
        </aside>
      </div>
      <footer class="footer mt-auto py-3 bg-light">
  <div class="container">
    <span class="text-muted">Place sticky footer content here.</span>
  </div>
</footer>
    </body>
 
  );
}

export default App;
