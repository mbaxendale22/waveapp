/**
 * prompts user to authorise connection to the app from their wallet
 * @param {import("react").SetStateAction} setCurrentAccount - a setState setter to update a piece of
 * state storing the users wallet address
 */

const connectWallet = async (setCurrentAccount) => {
  try {
    const { ethereum } = window

    if (!ethereum) {
      alert('metamask required')
      return
    }

    // Noticed different config method used inside .request() compared to
    // in checkForWallet()
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

    console.log('connected', accounts[0])
    setCurrentAccount(accounts[0])
  } catch (err) {
    console.log(err)
  }
}

export default connectWallet
