import { useState } from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  const [mintCount, setMintCount] = useState(0)
  const [isMinting, setIsMinting] = useState(false)

  const mint = () => {
    setIsMinting(true)
    setTimeout(() => {
      setMintCount(mintCount + 1)
      setIsMinting(false)
    }, 2000)
  }

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <h1>gm ☕️</h1>
      <h2 className='my-2'>{mintCount}/1</h2>
      {mintCount === 0 ? (
        <button
          className='px-8 py-2 border rounded border-sky-800 text-sky-800 hover:bg-sky-100'
          onClick={mint}
          disabled={isMinting}
        >
          {isMinting ? 'Minting...' : 'Mint spidΞy'}
        </button>
      ) : (
        <Link
          className='px-8 py-2 border rounded border-sky-800 text-sky-800 hover:bg-sky-100'
          to='/about'
        >
          View NFT
        </Link>
      )}
    </div>
  )
}

export default App
