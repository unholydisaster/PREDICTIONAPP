import React from "react"
import "aos/dist/aos.css"
import Aos from "aos"
import "./Boxes.css"

class Basketball extends React.Component{
   constructor(){
       super()
       this.state={
           games:[]
       }
   }
   
    async componentDidMount(){
        Aos.init({duration:2000})
        const response=await fetch('https://stark-hollows-75541.herokuapp.com/api/sports')
        const data=await response.json()
        const item=data
        this.setState({
            games:item
        })
    }
    render(){
return(
    <div className="content" >
        <h4 className="text">Todays Basketball Tips</h4>
    {this.state.games.map((t,i)=>(
        <div  key={t.id} className="grids" style={{textAlign:"auto",color:"black",fontFamily:"helvetica"}}>
            <div data-aos="fade-up" className="boxes" >
                <h4 style={{color:"black",textSizeAdjust:"inherit"}} className="text">{t.league}</h4>
                <hr/>
              <h3 style={{color:"#f5fffa",textSizeAdjust:"inherit"}} className="text">{t.hometeam}</h3>
              <h3 style={{color:"#f5fffa",textSizeAdjust:"inherit"}} className="text">{t.awayteam}</h3>
              <hr/>
              <h4 style={{color:"black",textAlign:"auto"}} className="text">{t.pick}</h4>
            </div>
        </div>
    ))}</div>
)
}
}
export default Basketball;


