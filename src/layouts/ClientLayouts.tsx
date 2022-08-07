import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
type Props = {}

const ClientLayouts = (props: Props) => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default ClientLayouts