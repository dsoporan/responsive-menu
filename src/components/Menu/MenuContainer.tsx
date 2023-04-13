import React from 'react';
import { Outlet, useNavigate} from "react-router-dom";
import { IMenu } from "../../api/server";
import "./Menu.css";
import MenuItem from "./MenuItem";

interface MenuContainerProps {
    menuList?: IMenu[];
}

export default function MenuContainer({ menuList }: MenuContainerProps) {
    const navigate = useNavigate();

    const handleNavigation = ({ slug }: IMenu) => {
        navigate(slug);
    };

    return (
        <div className="menu-container">
            <nav className="menu-navigation">
                <ul className="menu-list">
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