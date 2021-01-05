import React from "react";
import photo from '../src/The-Boss-Baby-Transparent.png';   
function Header() {
    return (
        <header>
            <img 
                src={photo} 
                alt="Problem?"
            />
            <p>Meme Generator</p>
        </header>
    )
}

export default Header;

