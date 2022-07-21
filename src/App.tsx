import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Client/Home'
import ClientLayouts from './layouts/ClientLayouts'
import AdminLayout from './layouts/AdminLayouts'
import Product from './pages/Admin/Product/Product'
import Category from './pages/Admin/Category/Category'
import Dashboard from './pages/Admin/Dashboard'
import ProductAdd from './pages/Admin/Product/ProductAdd'
import ProductEdit from './pages/Admin/Product/ProductEdit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Routes>
        <Route path="/" element={<ClientLayouts />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<Product/>}/>
            <Route path="add" element={<ProductAdd/>}/>
            <Route path="edit/:id" element={<ProductEdit/>}/>
          </Route>
          <Route path="categorys" element={<Category />} />
        </Route>
      </Routes>

    </Container>
  )
}
const Container = styled.div`
  text-align: center;
`




export default App
