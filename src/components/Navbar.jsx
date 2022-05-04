import React from 'react'
import { Link } from 'react-router-dom'
import { GiCobweb } from 'react-icons/gi'
import { FiTwitter, FiGithub } from 'react-icons/fi'

const Navbar = () => {
  const TWITTER_URL = 'https://twitter.com/web3slinger'
  const GITHUB_URL = 'https://github.com/web3slinger'
  const EMAIL = 'web3slinger@gmail.com'

  return (
    <nav className='border-b text-slate-700 border-slate-300'>
      <div className='flex flex-wrap items-center justify-between px-6 py-4'>
        <Link className='text-2xl cursor-pointer' to='/'>
          <GiCobweb />
        </Link>
        <div className='flex items-center justify-between'>
          <a
            href={TWITTER_URL}
            target='_blank'
            className='px-4 py-2 text-xl cursor-pointer'
          >
            <FiTwitter />
          </a>
          <a
            href={GITHUB_URL}
            target='_blank'
            className='px-4 py-2 text-xl cursor-pointer'
          >
            <FiGithub />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className='px-2 py-1.5 ml-2 border rounded cursor-pointer font-medium border-slate-700'
          >
            Message
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
