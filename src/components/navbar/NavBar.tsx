import React, {HTMLAttributes, JSX} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
}

const NavBar: React.FC<NavbarProps> = (props): JSX.Element => {
    return(
        <nav {...props}>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div role="button" className="text-pink-400 btn btn-ghost btn-circle ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h7"/>
                            </svg>
                        </div>
                        <ul
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className={'text-pink-400'}><a>How Started?</a></li>
                            <li className={'text-pink-400'}><a>Community</a></li>
                            <li className={'text-pink-400'}><a>Socials</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-ghost text-xl" href={'https://t.me/OFFICIALSCREWCOIN'}>
                        <FontAwesomeIcon icon={faTelegram} className="w-16 h-16 text-blue-400" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;