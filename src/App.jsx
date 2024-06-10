
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Products from './Products'
import {Product} from "./Product"

function App() {



  return (
    <Routes>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:productId' element={<Product/>}/>
    </Routes>
  )
}

export default App
