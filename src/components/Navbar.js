import React from 'react';
import style from '../assets/stylesheets/navbar.module.css';
import bascet from '../assets/icons/bascet.svg';
import find from '../assets/icons/magnifier.svg';
import account from '../assets/icons/profile.svg';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();

  const goToRegister = async () => {
    navigate('/registration');
  };

  return (
    <nav className={style.navbar}>
        <div className={style.navContainer}>
          <div className={style.navFind}>
            <form class="form-inline my-2 my-lg-0">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                <img className={style.Icon} src={find} alt='lll'></img>
              </button>
              <input class="form-control mr-sm-2" type="search" placeholder="искать" aria-label="Search"></input>
            </form>

          </div>
            <a href="#section" className={style.navbarLogo}>NYX_MAGIC_KRG</a>
            <div className={style.navIcons}>
              <button>
                <img className={style.Icon} src={bascet} alt='lll'></img>
              </button>
                <button onClick={goToRegister}>
                  <img src={account} alt='lll'></img>
                </button>
              
            </div>
        </div>
        
        <div className={style.navMenu}>
          <ul className={style.navLinks}>
              <li className={style.navItem}>
                <a className={style.navLinkItem} href="#section">Волосы</a>
              </li>
              <li className={style.navItem}>
                <a className={style.navLinkItem} href="#section">Лицо</a>
              </li>
              <li className={style.navItem}>
              <a className={style.navLinkItem} href="#section">Макияж</a>
              </li>
              <li className={style.navItem}>
              <a className={style.navLinkItem} href="#section">Тело</a>
              </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
