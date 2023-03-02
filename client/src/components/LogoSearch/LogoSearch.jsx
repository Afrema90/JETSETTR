import React from "react";
import Logo from "../../images/Jetsettr (1).png";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";

const LogoSearch = () => {
    return (
        <div className="logo-search">
            <img src="client/src/images/Jetsettr (1).png" alt="logo" />
            <div className="search">
                <input type="text" placeholder="#Explor" />
                 <div className="s-icon">
                    <UilSearch />
                </div>
        </div>
    </div> 
    )
}
    export default LogoSearch