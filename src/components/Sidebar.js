import React from 'react';
import logo from 'img/logo.svg'
import Menu from 'components/Sidebar/Menu'

function Sidebar() {
    return (
        <aside className="w-60 py-6 flex flex-col">
            <a href="#" className="mb-7">
                <img  className="h-10 px-6" src={logo}/>
            </a>
            
            <Menu/>
        </aside>
    );
}

export default Sidebar;