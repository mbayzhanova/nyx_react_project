import React from 'react';
import style from '../assets/stylesheets/footer.module.css';

function Footer() {
  return (
    <nav className={style.footerContainer}>
        <div className={style.footerList}>
          <div className={style.footerListValue}>
            <h2>Обслуживание клиентов</h2>
            <a href="/">Часто задаваемые вопросы</a>
            <a href="/">Правила и условия акции</a>
          </div>

          <div className={style.footerListValue}>
            <a href="/" className={style.footerListLink}>Связаться с нами</a>
            <a href="/" className={style.footerListLink}>Войти в систему</a>
            <a href="/" className={style.footerListLink}>Местоположение клиники</a>
          </div>

          <div className={style.footerListValue}>
            <h2>Оставаться на связи</h2>
            <p>Предоставляя свой адрес электронной почты, вы соглашаетесь получать сообщения от NYX_MAGIC_KRG  (это может быть изменено в любое время). Пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности и Условиями использования для получения более подробной информации.</p>
        </div>

        </div>
    </nav>

  )
}

export default Footer
