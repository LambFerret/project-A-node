import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <Link to="/" className="logo">MySite</Link>
        </header>
    );
};

export default Header;