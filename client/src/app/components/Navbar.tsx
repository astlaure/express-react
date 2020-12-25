import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div>
                <Link to="/">Application</Link>
            </div>
            <div>
                <div><Link to="/">Menu 1</Link></div>
                <div><Link to="/">Menu 2</Link></div>
                <div><Link to="/">Menu 3</Link></div>
            </div>
        </nav>
    );
};

export default Navbar;
