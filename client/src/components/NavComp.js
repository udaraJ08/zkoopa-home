import React from 'react'

const NavComp = ({hidden}) => {

    return <div className="toggle-menu w-100" hidden={hidden}>
        <div className="inner-collapse text-light">
            <h4 className="mr-2 font-lobster inner-nav-item clickable">Home</h4>
            <h4 className="mr-2 font-lobster inner-nav-item">Minter</h4>
            <h4 className="mr-2 font-lobster inner-nav-item">Showcase</h4>
            <h4 className="mr-2 font-lobster inner-nav-item">About Us</h4>
            <h4 className="mr-2 font-lobster inner-nav-item">Contact</h4>
        </div>
    </div>
}

export default NavComp;