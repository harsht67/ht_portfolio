// styles
import './App.scss'

// components
import { Home, Header, Footer, Work, About, Contact, Project } from './features'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="app">

            <Router>
            
                <Header/>

                <Routes>

                    <Route path='/' element={<Home/>} />

                    <Route path='/work' element={<Work/>} />

                    <Route path='/work/:name' element={<Project/>} />

                    <Route path='/about' element={<About/>} />

                    <Route path='/contact' element={<Contact/>} />

                </Routes>
            
               <Footer/>

           </Router>

        </div>
    )
}

export default App