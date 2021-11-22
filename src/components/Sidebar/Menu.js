import React from 'react';
import { Icon } from 'Icons';

function Menu() {
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <a href="#" className="h-10 flex items-center  gap-x-4 text-sm font-semibold text-white rounded hover:text-white px-4 bg-active">
                        <span>
                            <Icon name="home" />
                        </span>
                        Ana sayfa
                    </a>
                </li>
                <li>
                    <a href="#" className="h-10 flex items-center  gap-x-4 text-sm font-semibold text-link rounded hover:text-white px-4">
                        <span>
                            <Icon name="search"/>
                        </span>
                        Ara
                    </a>
                </li>
                <li>
                    <a href="#" className="h-10 flex items-center  gap-x-4 text-sm font-semibold text-link rounded hover:text-white px-4">
                        <Icon name="collection"/>
                        Kitaplığım
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;