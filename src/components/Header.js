import React from 'react'
import Typed from 'react-typed'

const Header = () => {

    return (
        <>
        <div className="header-wraper" id="home">
            <div className="main-info">
                <h1>Welcome to the Website</h1>
            <Typed
                className="typed-text"
                strings={[
                    'Search for education',
                    'Search for projects',
                    'Search about me',
                    'Search to contact me']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
            </Typed>
            </div>
        </div>
        
        </>
    )
}

export default Header;
