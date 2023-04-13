import React, {useState} from 'react';
import { Outlet, useNavigate} from "react-router-dom";
import { IMenu } from "../../api/server";
import "./Menu.css";
import MenuItem from "./MenuItem";

interface MenuContainerProps {
    menuList?: IMenu[];
}

export default function MenuContainer({ menuList }: MenuContainerProps) {
    const navigate = useNavigate();
    const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false);

    const handleNavigation = ({ slug }: IMenu) => {
        navigate(slug);
    };

    return (
        <div className="menu-container">
            <nav className="menu-navigation">
                <button
                    className="hamburger"
                    onClick={() => {
                        setIsMenuExpanded(!isMenuExpanded);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
                <ul className={`${isMenuExpanded ? 'menu-list expanded' : 'menu-list'}`}>
                    <div className="menu-list-item-container">
                        <li
                            className="menu-list-item"
                            onClick={() => navigate('/')}
                        >
                            Home
                        </li>
                    </div>
                    {menuList?.map((slug: IMenu) =>
                        <MenuItem key={slug.slug} onNavigation={handleNavigation} slug={slug} />
                    )}
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}