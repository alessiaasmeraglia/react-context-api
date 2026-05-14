import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg luxe-navbar border-bottom">
            <div className="container-fluid px-4 px-lg-5">
                <NavLink className="navbar-brand luxe-logo" to="/">
                    LUXE
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Apri navigazione"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
                        <li className="nav-item">
                            <NavLink className="nav-link luxe-nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link luxe-nav-link" to="/about">
                                Chi Siamo
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link luxe-nav-link" to="/products">
                                Prodotti
                            </NavLink>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center gap-3 nav-icons">
                        <span>⌕</span>
                        <span>🛒</span>
                        <span>♙</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;