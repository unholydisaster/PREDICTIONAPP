import React from "react"
import "aos/dist/aos.css"
import Aos from "aos"
import "./Boxes.css"

class Container extends React.Component{
   constructor(){
       super()
       this.state={
           games:[]
       }
   }
   
    async componentDidMount(){
        Aos.init({duration:2000})
        const response=await fetch('https://peaceful-refuge-71294.herokuapp.com/api/sports')
        const data=await response.json()
        const item=data
        this.setState({
            games:item
        })
    }
    render(){
return(
    <div className="content" >
     {this.state.games.map((t,i)=>(
        <div key={t.id} className="grids" style={{textAlign:"auto",color:"black",fontFamily:"helvetica"}}>
            <div data-aos="fade-up" className="boxes" >
                <h4 style={{color:"black",textSizeAdjust:"inherit"}}>{t.league}</h4>
                <hr/>
              <h5 style={{color:"#f5fffa",textSizeAdjust:"inherit"}}>{t.hometeam}</h5>
              <h5 style={{color:"#f5fffa",textSizeAdjust:"inherit"}}>{t.awayteam}</h5>
              <hr/>
              <h4 style={{color:"black",textAlign:"auto"}}>{t.pick}</h4>
            </div>
        </div>
     ))}</div>
)
}
}
export default Container;
