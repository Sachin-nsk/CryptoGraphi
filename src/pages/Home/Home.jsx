import React from 'react'
import "./Home.css"

const home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <h1>Crypto Market</h1>
        <p>Welcome to the cyptocurrency market. Sign up to explore more.</p>
        <form>
          <input type="text"  placeholder='Search Crypto'/>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24Hr Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default home
