// styles
import './App.scss'

// components
import { Header, Footer, Home, About, Works, Work, Contact } from './features'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="app">

            <Router>
            
                <Header/>

                <Routes>

                    <Route path='/' element={<Home/>} />

                    <Route path='/about' element={<About/>} />

                    <Route path='/work' element={<Works/>} />

                    <Route path='/work/:name' element={<Work/>} />

                    <Route path='/contact' element={<Contact/>} />

                </Routes>
            
               <Footer/>

           </Router>

        </div>
    )
}

export default App