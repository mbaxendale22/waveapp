import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import checkIfWalletIsConnected from './lib/checkForWallet'
import connectWallet from './lib/connectWallet'
import './App.css'

export default function App() {
  const [currentAccount, setCurrentAccount] = useState('')

  useEffect(() => {
    checkIfWalletIsConnected(setCurrentAccount)
  }, [])

  const wave = () => {}

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hey there!</div>

        <div className="bio">
          I am Matthew, I'm learning how to build and deploy smart contracts
          using Solidity. Help me test my skills by connecting your Ethereum
          wallet and giving me a wave!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  )
}
