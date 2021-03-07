import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from "react-icons/io"

export const sidebarData=[
    {
        title:'Home',
        Path:'/',
        icons:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Basketball',
        Path:'/Basketball',
        icons:<FaIcons.FaBasketballBall/>,
        cName:'nav-text'
    },
    {
        title:'Icehokey',
        Path:'/Icehockey',
        icons:<FaIcons.FaHockeyPuck/>,
        cName:'nav-text'
    },
    {
        title:'contact',
        Path:'/contact',
        icons:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    }
]