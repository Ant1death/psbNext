import style from '../../styles/AppHeader.module.scss'
function appHeader() {
    return(
        <header className={style.header}>
            <div className={style.logo}>
                <a href="/" className={style.header__logo}>
                    <img src="/logo.png" alt="logo" />
                </a>
            </div>
            <nav className={style.navbar}>
                <ul>
                    <li>
                        <a href="/" className={style.navbar__link}>Главная</a>
                    </li>
                    <li>
                        <a href="/vps" className={style.navbar__link}>VPS/VDS</a>
                    </li>
                    <li>
                        <a href="#" className={style.navbar__link}>VPN</a>
                    </li>
                    <li>
                        <a href="#" className={style.navbar__link}>Bulletproof VPS</a>
                    </li>
                    <li>
                        <a href="#" className={style.navbar__link}>О компании</a>
                    </li>
                    <li>
                        <div className={style['language-wrapper']}>
                            <div className={style['language-input']}>
                                <img src="/ru.svg" alt="country" />
                                <span className="selected">Русский</span>
                                <div className={style['language-caret']}>
                                    <img src="/caret.svg" alt="caret" />
                                </div>
                                <ul className="language-menu">
                                    <li>

                                    </li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className={style.header__login}>Личный кабинет</a>
                    </li>
                </ul>
            </nav>
            <div className={style.hamburger}></div>
        </header>
    )
}
export default appHeader;