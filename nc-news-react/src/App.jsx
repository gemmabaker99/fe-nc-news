import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import Post from './components/Post'
import Comments from './components/Comments'
import TopicPage from './components/TopicPage'
import Login from './components/Login'
import NotFound from './components/NotFound'

function App() {

  const [user, setUser] = useState('')

  return (
    <div className='mainBody'>
     < Header user={user} setUser={setUser} />
     <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/articles' element={<Articles />} />
    <Route path='/articles/:article_id' element={<SingleArticle />} />
    <Route path='/post' element={<Post />} />
    <Route path='/articles/:article_id/comments' element={<Comments user={user}/>} /> 
    <Route path='/topics/:topic_name' element={<TopicPage />} />
    <Route path='/login' element={<Login user={user} setUser={setUser}/>} />
    <Route path="*" element={<NotFound />} />
     </Routes>
     </div>
  )
}

export default App
