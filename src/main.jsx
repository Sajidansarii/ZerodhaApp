import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './index.css'
import HomePage from './Landing-Page/Home/HomePage.jsx'
import Signup from './Landing-Page/Signup/Signup.jsx'
import About from './Landing-Page/About/About.jsx'
import Products from './Landing-Page/Products/products.jsx'
import Pricing from './Landing-Page/Pricing/Pricing.jsx'
import Support from './Landing-Page/Support/Support.jsx'
import NotFound from './Landing-Page/NotFound.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/HomePage' element={<HomePage/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Products' element={<Products/>}/>
  <Route path='/Pricing' element={<Pricing/>}/>
  <Route path='/Support' element={<Support/>}/>
  <Route path='/*' element={<NotFound/>}/>

 </Routes>
 </BrowserRouter>
)
