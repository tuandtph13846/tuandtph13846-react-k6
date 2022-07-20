import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
type Props = {}

const ClientLayouts = (props: Props) => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    )
}

export default ClientLayouts