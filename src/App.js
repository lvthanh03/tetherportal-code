import React from 'react'
import './App.css'

import Links from './components/links/Links'

import Tle from './containers/tle/Tle'
import Header from './containers/header/Header'
import About from './containers/about/About'

const App = () => {
    return (
        <div className="App">
            <div>
                <Header />
            </div>
            <div className="gradient__bg">
                <About />
            </div>
            <div>
                <Tle />
            </div>
            <div className="gradient__bg">
                <Links />

            </div>
        </div>
    )
}

export default App