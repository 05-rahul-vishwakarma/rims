import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function MainLayout() {
    return (
        <main className='h-screen w-vw overflow-x-hidden  ' >
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default MainLayout