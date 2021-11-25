import React from 'react';
import { Icon } from 'Icons';
import {NavLink} from 'react-router-dom'

function Menu() {
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink className={({ isActive }) => isActive? "bg-active text-white h-10 flex items-center  gap-x-4 text-sm font-semibold text-link rounded hover:text-white px-4": 'h-10 flex items-center  gap-x-4 text-sm font-semibold text-link rounded hover:text-white px-4'} exact="true" to={"/"}>
                        <span>
                            <Icon name="home" />
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive? "bg-active text-white h-10 flex items-center  gap-x-4 text-sm font-semibold text-link rounded hover:text-white px-4": 'h-10 flex items-center  gap-x-4 text-sm font-semibold text-link rounded hover:text-white px-4'} to={"/search"}>
                        <span>
                            <Icon name="search"/>
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive? "bg-active text-white h-10 flex items-center  gap-x-4 text-sm font-semibold text-link rounded hover:text-white px-4": 'h-10 flex items-center  gap-x-4 text-sm font-semibold text-link rounded hover:text-white px-4'} to={"/collection"}>
                        <Icon name="collection"/>
                        Kitaplığım
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;