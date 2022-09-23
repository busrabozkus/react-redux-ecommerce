import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
    return (
        <div>
            <div className='container my-4 py-4  '>
                <div className='row'>
                    <div className='col-md-6 mb-2'>
                        <h1 className='fw-bold mb-4'>Hakkımızda</h1>
                        <p className='lead mb-4'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                        </p>

                        <NavLink to="/contact" className="btn btn-outline-dark px-3 " > Bizimle İletişime Geçin</NavLink>

                    </div>

                    <div className='col-md-6 d-flex justify-content-center my-5 py-4'>
                        <img src='images\hakkımızda.PNG'alt='Hakkımızda' width="500px" height="400px"></img>

                    </div>
                </div>
            </div>

        </div>


    )
}

export default About