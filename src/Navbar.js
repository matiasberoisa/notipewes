import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className = "navbar">
            <h2>Blog del Mati</h2>
            <div className = 'links'>
                <Link to="/">home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                }}>new blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;