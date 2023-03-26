import AppHeader from '../AppHeader/AppHeader'
import AppFooter from '../AppFooter/AppFooter'
const Layout = ({ children }) => {
    return (
        <div className="container">
            <AppHeader />
            { children }
            <AppFooter />
        </div>
    )
}
export default Layout