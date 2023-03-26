import style from '../../styles/AppFooter.module.scss'

function appFooter() {
    return (
    <footer className={style.footer}>
        <p className={style.footer__copyright}>© PSB Hosting. All Rights Reserved</p>
        <div className={style.footer__wrapper}>
          <nav>
            <a href="#">О компании</a>
            <a href="#">О компании</a>
            <a href="#">О компании</a>
            <a href="#">О компании</a>
          </nav>
        </div>
    </footer>
    )
}
export default appFooter;