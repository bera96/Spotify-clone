import React from 'react';
import logo from 'img/logo.svg'
import Menu from 'components/Sidebar/Menu'
import { Icon } from 'Icons';
import Playlists from 'components/Sidebar/Playlists'
import DownloadApp from './Sidebar/DownloadApp';

function Sidebar() {
    return (
        <aside className="w-60 py-6 flex flex-col flex-shrink-0 bg-black">
            <a href="#" className="mb-7">
                <img  className="h-10 px-6" src={logo}/>
            </a>
            
            <Menu/>

            <nav className="mt-6">
                <ul>
                    <li>
                        <a className="py-2 px-6 flex text-sm items-center group text-link font-semibold hover:text-white" href="#">
                            <span className="w-6 h-6 flex justify-center items-center mr-4 bg-white  bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                                <Icon name="plus" size={12}/>
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <a className="py-2 px-6 flex text-sm items-center group text-link font-semibold hover:text-white rounded-sm" href="#">
                            <span className="w-6 h-6 flex justify-center items-center mr-4 bg-gradient-to-br from-purple-700 text-white to-blue-300 opacity-70 group-hover:opacity-100">
                                <Icon name="heart" size={12}/>
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>
            </nav>

            <Playlists/>
            <DownloadApp/>
            
        </aside>
    );
}

export default Sidebar;