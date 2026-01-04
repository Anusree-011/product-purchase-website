import React from 'react'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import PlaceToOrder from './components/PlaceToOrder'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product-list' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceToOrder />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App