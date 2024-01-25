import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';

import style from '../../assets/stylesheets/account.module.css';

function RegistrationPage () {
  return (
    <div>
      <NavBar />
      <div className={style.Container}>
        <div className={style.registerContainer}>
          <h1>Регистрация</h1>
          <form className={style.registrationForm}>
            <div className={style.formList}>
              <label htmlFor="username">первое имя</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="username">второе имя</label>
              <input type="text" id="lastname" name="lastname" />
            </div>

            <div>
              <label htmlFor="email">почта</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="password">пароль</label>
              <input type="password" id="password" name="password" />
            </div>
            
            <button type={style.submit}>Зарегистрироваться</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegistrationPage;
