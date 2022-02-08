import { ethers } from 'ethers'
import abi from '../utils/WavePortal.json'

const contractAddress = '0x365bDc701e3de6F3bd14b0038F7AEB80c0E63233'
const contractABI = abi.abi

export const readWaveData = async (setTotalWaves) => {
  try {
    const { ethereum } = window
    if (ethereum) {
      // provider is a method from ethers lib that allows client to connect to eth nodes
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      // these variables reference the contract, the contract address is the address of the contract on the bc,
      // the abi comes from the WavePortal.json (which is compilied in the artifacts of the contract, pasted in src/utils here)
      const wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      let count = await wavePortalContract.getTotalWaves()
      setTotalWaves(count.toNumber())
    }
  } catch (err) {
    console.log(err)
  }
}

export const wave = async (setTotalWaves, setLoadingState) => {
  try {
    setLoadingState(true)
    const { ethereum } = window

    if (ethereum) {
      // provider is a method from ethers lib that allows client to connect to eth nodes
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      // these variables reference the contract, the contract address is the address of the contract on the bc,
      // the abi comes from the WavePortal.json (which is compilied in the artifacts of the contract, pasted in src/utils here)
      const wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      let count = await wavePortalContract.getTotalWaves()
      // ABOVE CONCERNS READING DATA FROM THE CONTRACT BELOW WILL BE THE CODE TO WRITE DATA

      const waveTxn = await wavePortalContract.wave()
      console.log('mining...', waveTxn.hash)

      await waveTxn.wait()
      console.log('mined --', waveTxn.hash)
      setLoadingState(false)
      count = await wavePortalContract.getTotalWaves()

      console.log('retrieved total wave count', count.toNumber())
      setTotalWaves(count.toNumber())
    } else {
      console.log("etherum object doesn't exist!")
    }
  } catch (err) {
    console.log(err)
  }
}
