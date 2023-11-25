import { Link } from "react-router-dom"

const Menu = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/about"}>About me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/projects"}>My projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/cv"}>CV</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/contact"}>Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Menu