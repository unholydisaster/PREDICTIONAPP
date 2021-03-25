import React from "react"
import * as FaIcons from "react-icons/fa"
import {Link} from "react-router-dom"
import {sidebarData} from './SidebarData'
import './Navbar.css'
import {IconContext} from "react-icons"

export default class Navbar1 extends React.Component{
    constructor(){
        super()
        this.state={
                  sidebar:false
        }
    }
     showSidebar=()=>{ 
         const {sidebar}=this.state
         this.setState({
             sidebar:!sidebar
         })
     }
    
    render(){
        const{sidebar}=this.state
        return( 
            <>
            <IconContext.Provider value={{color:'#008080'}}>
            <div className="navbar">
            <h1 style={{fontFamily:"Pluto",color:"#004040",fontSize:"60px" ,textAlign:"end"}}>BetNinja</h1>
            <img src="/images/images (3).jfif" style={{backgroundColor:"white"}} alt=""></img>
              <Link to="#" className="menu-bars">
                 <FaIcons.FaBars onClick={this.showSidebar}/>
              </Link>
            </div>
            <nav className={sidebar ?'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items' onClick={this.showSidebar} >
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                        <img src="/images/images.png" style={{backgroundColor:"white"}} alt=""></img>
                        </Link>
                    </li>
                    {sidebarData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.Path}>
                                    {item.icons}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
            </>
        )
    }
}