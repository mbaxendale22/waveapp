import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import checkIfWalletIsConnected from './lib/checkForWallet'
import connectWallet from './lib/connectWallet'
import { wave, readWaveData } from './lib/wave'
import Loader from './components/Loader'
import './App.css'

export default function App() {
  const [currentAccount, setCurrentAccount] = useState('')
  const [totalWaves, setTotalWaves] = useState(0)
  const [loadingState, setLoadingState] = useState(false)

  useEffect(() => {
    checkIfWalletIsConnected(setCurrentAccount)
    readWaveData(setTotalWaves)
  }, [])

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hey there!</div>

        <div className="bio">
          I am Matthew, I'm learning how to build and deploy smart contracts
          using Solidity. Help me test my skills by connecting your Ethereum
          wallet and giving me a wave!
        </div>
        <button
          className="waveButton"
          onClick={() => wave(setTotalWaves, setLoadingState)}
        >
          Wave at Me
        </button>
        {loadingState ? (
          <>
            <div className="bio">Mining...</div>
            <Loader show={true} />
          </>
        ) : (
          <>
            <div className="bio">Total Waves:{totalWaves}</div>
          </>
        )}
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  )
}
