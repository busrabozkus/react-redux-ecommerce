import React from 'react'
import Product from './Product'
import About from './About'

function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="/images/ticaret.jpg" className="card-img" alt="Background" height="550px"/>
              
            </div>
            <Product/>
            


        </div>
    )
}

export default Home