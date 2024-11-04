import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import Post from './components/Post'

function App() {

  return (
    <div className='mainBody'>
     < Header />
     <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/articles' element={<Articles />} />
    <Route path='/articles/:article_id' element={<SingleArticle />} />
    <Route path='/post' element={<Post />} />
     </Routes>
     </div>
  )
}

export default App
