import React from 'react';
import style from '../assets/stylesheets/navbar.module.css';
import bascet from '../assets/icons/bascet.svg';
import find from '../assets/icons/magnifier.svg';
import account from '../assets/icons/profile.svg';

function Navbar() {
  return (
    <nav className={style.navbar}>
        <div className={style.navContainer}>
          <div className={style.navFind}>
            <img className={style.Icon} src={find} alt='lll'></img>
            <p className={style.navFindBtn}>искать</p>
          </div>
            <a href="#" className={style.navbarLogo}>NYX_MAGIC_KRG</a>
            <div className={style.navIcons}>
              <img className={style.Icon} src={bascet} alt='lll'></img>
              <img src={account} alt='lll'></img>
            </div>
        </div>
        
        <div className={style.navMenu}>
          <ul className={style.navLinks}>
              <li className={style.navItem}>
                <a className={style.navLinkItem} href="#">Волосы</a>
              </li>
              <li className={style.navItem}>
                <a className={style.navLinkItem} href="#">Лицо</a>
              </li>
              <li className={style.navItem}>
              <a className={style.navLinkItem} href="#">Макияж</a>
              </li>
              <li className={style.navItem}>
              <a className={style.navLinkItem} href="#">Тело</a>
              </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
