import React from 'react'

const NavBar = ({ title }) => {
    return (
        <nav className='nav' style={{display: 'flex', justifyContent: 'space-between', gap: '50px'}}>
            <h1 style={{ color: '#61DAFB', textAlign: 'center' }}>{title}</h1>
            <span className='nav-links' style={{display: 'flex', justifyContent: 'space-between', gap: '20px'}}>
                {/* <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a> */}
            </span>
        </nav>
    )
}

export default NavBar
