import './Nav.scss';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <div className="container">
                <div className="nav__container">
                    <NavLink className="logo" to={"/"}><h1>CameraMath</h1></NavLink>

                    <ul>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "active" : "link"} to={"/download"}>Download</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "active" : "link"} to={"/expert"}>Expert Q&A</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "active" : "link"} to={"/lessons"}>Lessons&Calculators</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "active" : "link"} to={"/premium"}>Premium</NavLink>
                        </li>
                    </ul>
                    <select id="lang">
                        <option value="Eng">En</option>
                        <option value="Rus">Ru</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Nav