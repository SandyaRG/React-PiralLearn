import * as React from "react";
import { FaBars, FaPowerOff } from "react-icons/fa";
import { SideMenuDataForAdmin, SideMenuDataForUser } from "./SideMenuData";
import '../App.css';
 import { useState } from "react";
import Login from "../component/Login";
import { Link } from "react-router-dom";

export default function SideMenu(){
    const[role, setRole]=useState(sessionStorage.getItem("Role") ? sessionStorage.getItem("Role") : "");
    
 
    function logout(): void {
        setRole("");
        sessionStorage.clear();
        
     }
    return(
        <>
        {role === "" && <Login></Login>}
        {role !== ""  && 
            <div className="sidebar">
                <div className='top_section'>
                    <h1 className='logo'>Logo</h1>
                    <div className='bars'>
                        <FaBars/>
                    </div>
                    <div className='bars' onClick={()=> logout()}>
                        <FaPowerOff/>
                    </div>
                </div>
                {role === "Admin" &&
                 <ul className='sidebarList'>
                    {SideMenuDataForAdmin.map((val,key)=>{
                        return (
                            
                            <li className='row' key={key} 
                            id={window.location.pathname == val.link ? "active" : ""}
                            >
                                {" "}
                                <div id="icon">{val.icon}</div>
                                <Link id="title" to={val.link}>{val.title}</Link>  
                            </li>
                        )
                    })}
                </ul>
                }
                {role === "Student" && <ul className='sidebarList'>
                    {SideMenuDataForUser.map((val,key)=>{
                        return (
                            
                            <li className='row' key={key} 
                            id={window.location.pathname == val.link ? "active" : ""}
                            >
                                {" "}
                                <div id="icon">{val.icon}</div>
                                <Link id="title" to={val.link}>{val.title}</Link>  
                            </li>
                        )
                    })}
                </ul>}
                
            </div>
        }

        </>
    )

}
