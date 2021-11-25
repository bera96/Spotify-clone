import React from 'react';
import Navbar from "components/Navbar";
import Home from 'views/Home'
import Search from 'views/Search'
import Collection from 'views/Collection';
import {Route,Routes} from 'react-router-dom'


function Content() {
    return (
       <main className="flex-auto">
           <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/collection" element={<Collection/>}/>
                </Routes>
           
       </main>
    );
}

export default Content;