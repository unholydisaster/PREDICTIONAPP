import React from "react"
import "./App.css"
import Container from "./components/Container"
import Navbar1 from "./components/Navbar1"
import { Route, Switch,BrowserRouter as Router } from "react-router-dom"
import Basketball from "./pages/Basketball"
import Icehockey from "./pages/Icehockey"
import Contact from "./pages/Contact"
import Footer from "./components/footer"
import Upfooter from "./components/upfooter"



export default class App extends React.Component{
  render(){
    return(
      <>
        <Router>
      <Navbar1/>
      <Upfooter/>
      <Switch>
        <Route exact path='/' component={Container}/>
        <Route exact path='/Icehockey'component={Icehockey}/>
        <Route exact path='/Contact'  component={Contact}/>
        <Route exact path='/Basketball' component={Basketball}/>
      </Switch>  
      <Footer/>
      </Router>
      </>
    )
  }
}