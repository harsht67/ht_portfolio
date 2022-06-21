// styles
import './App.scss'

// components
import { Header, Footer, Home, About, Works, Work, Contact } from './features'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(prev => prev=='light'?'dark':'light')
    }

    return (
        <div className={`app theme-${theme}`}>

            <Router>
            
                <Header 
                    theme={theme}
                    toggleTheme={toggleTheme} 
                />

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