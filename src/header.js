import React from 'react';
import { Link } from 'react-router-dom';
import App from './App';

const Header = () => {
    const listMenu = ['Home', 'Profile', 'Contact']; 
    return(
        <header>
        <div className="header">
            {listMenu.map((name)=>{
                return(
                    <Link to={`/${name}`} key={name}>
                        <div className="menu">{name}</div>
                    </Link>
                );
            })}
        </div>
        </header>
    );
};

export default Header;