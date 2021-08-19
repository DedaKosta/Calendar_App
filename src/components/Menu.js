import React from 'react'
import image from '../logo.svg'

const Menu = () => {
    return (
        <div className='menu'>
            <img src={image} alt="logo" />
            <label className='menu-label'>Calendar App</label>
        </div>
    )
}

export default Menu
