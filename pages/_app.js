import Layout from '../compontens/Layout/Layout'
import '../styles/globals.css'
import {Rubik} from '@next/font/google'

const rubik = Rubik({
  subsets: ['latin']
})
export default function App({Component, pageProps}) {
    return(
        <div className={rubik.className}>
            <Layout>
            <Component {...pageProps} />
            </Layout>
        </div>    
    )
    
}