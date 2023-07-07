import React from "react";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { stores } from "./store";
import Home from "./home/home";
import Header from './header/header';
import Footer from './footer/footer';
import Chitplans from "./chitplans/chitplans";
import Branches from "./branches/branches";
import Contact from "./contact/contact";
import About from "./about/about";
import Icons from "./icons/icons";


const Redux = () =>{
    return(
        <>
           <Provider store={stores}>
                <Routing/>
           </Provider> 
        </>
    );
}
const Main = () =>{
    return(
        <>
            <Home />
            
            
        </>
    );
}


const Routing = () =>{


    return(
        <>
            <BrowserRouter>
                
                    <Header/>
                    <Icons/>
                
                    <Routes>
                        <Route path='/' element={<Main/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/chit-plans' element={<Chitplans/>} />
                        <Route path='/branches' element={<Branches/>} />
                        <Route path='/contact' element={<Contact/>} />
                        
                    </Routes>

                    <Footer/>
            </BrowserRouter>
        </>
    );
}

export default Redux;

