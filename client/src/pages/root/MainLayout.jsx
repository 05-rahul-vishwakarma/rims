import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'

function MainLayout() {
    return (
        <main className='h-screen w-dvw   ' >
            <Header />
            <Outlet />
        </main>
    )
}

export default MainLayout