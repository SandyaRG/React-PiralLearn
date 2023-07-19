import * as React from "react";
import { FaBuilding, FaDashcube, FaUser } from "react-icons/fa";

export const SideMenuDataForAdmin = [
    // {
    //     title:"Dashboard",
    //     icon: <FaDashcube />,
    //     link: '/Dashboard'
    // },
    {
        title:"University",
        icon: <FaBuilding />,
        link: '/University'
    },
    {
        title:"Department",
        icon: <FaBuilding />,
        link: '/Department'
    },
    {
        title:"User",
        icon: <FaUser />,
        link: '/User'
    },
]; 
export const SideMenuDataForUser = [
    {
        title:"University",
        icon: <FaBuilding />,
        link: '/University'
    },
    {
        title:"User",
        icon: <FaUser />,
        link: '/User'
    }
]; 