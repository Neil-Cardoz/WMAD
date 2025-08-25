import React from "react";

const NavBar = () => (
        <nav className="bg-blue-600 text-white p-4 flex justify-start items-center gap-8">
            <ul className="flex gap-4">
                <li><a href="https://www.siu.edu.in/" className="hover:underline">Home</a></li>
                <li><a href="https://www.siu.edu.in/campus/lavale" className="hover:underline">Contact us</a></li>
                <li><a href="https://www.siu.edu.in/about-us/overview" className="hover:underline">About us</a></li>
            </ul>
        
    </nav>
    
);
export default NavBar;