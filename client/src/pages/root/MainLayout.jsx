// import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import HomePage from '../root/HomePage'

function MainLayout() {
    return (
        <main className='h-screen w-screen overflow-x-hidden  ' >
            <Header />
            <HomePage/>
            <Footer />
        </main>
    )
}

export default MainLayout