import React,{useState} from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(true)
    const closeAction = ()=>{
        setBurgerStatus(!burgerStatus)
    }
  return (
    <header>
        <a href="#">
            <img src="/images/logo.svg" alt="" />
        </a>
        <nav className="menu">
            <ul>
                <li><a href="model-s">Model S</a></li>
                <li><a href="#model-3">Model 3</a></li>
                <li><a href="#model-x">Model X</a></li>
                <li><a href="#model-y">Model Y</a></li>
            </ul>
        </nav>
        <div className="right-menu">
            <a href="">Shop</a>
            <a href="">Tesla Account</a>
            <MenuIcon CloseIcon onClick={closeAction}/>
        </div>
        <div className="burger-nav" style={{'transform' : burgerStatus? 'translateX(100%)' : 'translateX(0)', 'transition':'.5s'}}>
            <CloseIcon onClick={closeAction}/>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#"></a>Cybertruck</li>
            <li><a href="#"></a>Rodaster</li>
            <li><a href="#"></a>Existing</li>
            <li><a href="#"></a>Existing</li>
            <li><a href="#"></a>Existing</li>
        </div>
    </header>
  )
}

export default Header