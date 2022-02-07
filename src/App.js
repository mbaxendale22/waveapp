import * as React from 'react'
import { ethers } from 'ethers'
import './App.css'

export default function App() {
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
      </div>
    </div>
  )
}
