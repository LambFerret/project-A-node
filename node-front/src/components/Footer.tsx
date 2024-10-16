import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { useAuth } from './AuthProvider';

const Footer: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    return (
        <footer>
            <p>This is the footer.</p>
            <div>
                <Link to="/"><button>Home</button></Link>
                <Link to="/bulletin-board"><button>Bulletin Board</button></Link>
                {
                    !isAuthenticated
                        ? (<Link to="/login"><button>Login</button></Link>)
                        : (
                            <>
                                <Link to="/profile"><button>Profile</button></Link>
                                <button onClick={logout}>Logout</button>
                            </>
                        )
                }
                <Link to="/monitoring"><button>Monitoring</button></Link>
            </div>
        </footer>
    );
};

export default Footer;