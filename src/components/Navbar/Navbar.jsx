import React,{useContext} from 'react'
import './Navbar.css'
import signUpIcon from '../../assets/sign_up icon.png';
import { CoinContext } from '../../context/CoinContext';

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=>{
    switch(event.target.value){
      case "usd": {
        setCurrency({name:"usd",symbol:"$"});
        break;
      }
      case "eur": {
        setCurrency({name:"eur",symbol:"€"});
        break;
      }
      case "inr": {
        setCurrency({name:"inr",symbol:"र"});
        break;
      }
      default: {
        setCurrency({name:"usd",symbol:"$"});
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <i class="fa-brands fa-bitcoin fa-2xl" className='logo'></i>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>BLog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
            <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            
        </select>
        <button>Sign up <img src={signUpIcon} alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar
