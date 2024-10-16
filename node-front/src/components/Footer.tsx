import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>This is the footer.</p>
            <div>
                <Link to="/"><button>Home</button></Link>
                <Link to="/bulletin-board"><button>Bulletin Board</button></Link>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/monitoring"><button>Monitoring</button></Link>
            </div>
        </footer>
    );
};

export default Footer;