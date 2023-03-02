import React from "react";
import Logo from "../../images/Jetsettr.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";

const LogoSearch = () => {
    return (
        <div className="logo-search">
            <img src="client/src/images/Jetsettr.png" alt="logo" />
            <div className="search">
                <input type="text" placeholder="#Explore" />
                 <div className="s-icon">
                    <UilSearch />
                </div>
        </div>
    </div> 
    )
}
    export default LogoSearch