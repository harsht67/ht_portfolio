// styles
import './App.scss'

// components
import { Home, Header, Footer } from './features'

function App() {
    return (
        <div className="app">
            
            <Header/>

            <Home/>
            
            <Footer/>
        
        </div>
    )
}

export default App