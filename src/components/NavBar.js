
import logoMini from  '../assets/logo/logoi-mini-white.png'

function NavBar({ title }) {
    return (
        <>
            <nav className="navbar navbar-expand bg-dark px-5">
                <div className="container-fluid">
                    <a className="navbar-brand text-dark fw-bold text-white" href="#">
                        <img src={logoMini} alt="" width="35" height="29"
                             className="d-inline-block align-text-top" />
                        { title }
                    </a>
                    <div className="d-flex fw-bold" role="search">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Hombres</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Mujeres</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Niños</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contactanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar