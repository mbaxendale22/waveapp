/**
 * checks if window.ethereum is accessable && if wallet has authorised the app
 * @param {import("react").SetStateAction} setCurrentAccount - a setState setter to update a piece of
 * state storing the users wallet address
 */
const checkIfWalletIsConnected = async (setCurrentAccount) => {
  try {
    // destructure eth object from widow object
    const { ethereum } = window

    // check to see if its actually there

    if (!ethereum) {
      console.log('no metamask wallet detected')
    } else {
      console.log('ethereum object detected', ethereum)
    }

    // this method will check to see if we're auth and return the accounts that have authorised
    // the app in an array, should only need to first one.
    const accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length !== 0) {
      const activeAccount = accounts[0]
      console.log('found authorized account', activeAccount)
      setCurrentAccount(activeAccount)
    } else {
      console.log('no authorized account found')
    }
  } catch (err) {
    console.log(err)
  }
}

export default checkIfWalletIsConnected
