import React from "react"
import "aos/dist/aos.css"

import "./Boxes.css"

class Container extends React.Component{
   constructor(){
       super()
       this.state={
           games:[],
           click:0,
           clik:0,
           clk:0
       }
       this.handleClick=this.handleClick.bind(this)
       this.handleClik=this.handleClik.bind(this)
       this.handleClk=this.handleClk.bind(this)
   }

   
       handleClick(event){
        event.preventDefault() 
           const{click}=this.state
           this.setState({
               click:click+1
           })

       }
       handleClik(event){
        event.preventDefault() 
        const{clik}=this.state
            this.setState({
                clik:clik+1
            })

    }
    
    handleClk(event){
        event.preventDefault() 
        const{clk}=this.state
            this.setState({
                clk:clk+1
            })
            

    }

   componentIs(){
           localStorage.getItem('games')&&this.setState({
               games: JSON.parse(localStorage.getItem('games'))
           })
   }
    async componentDidMount(){
        if(!localStorage.getItem('games')){
        const response=await fetch('https://peaceful-refuge-71294.herokuapp.com/api/sports')
        const data=await response.json()
        let item=data             
        this.setState({
            games:item      
        })
    }else{
        console.log('using data from localstorage')
    }
    }
    componentWasUpdate(nextProps,nextState){
        localStorage.setItem('games',JSON.stringify(nextState.games))
        localStorage.setItem('gamesDate',Date.now())
    }
    render(){
        const{clik,click,clk}=this.state
return(
    <>
        <h4 className="text">Todays Football Tips</h4>
        <div  className="grids" style={{textAlign:"auto",color:"black",fontFamily:"helvetica"}}>
            <div className="boxes" >
                <h4 style={{color:"black",textSizeAdjust:"inherit"}} className="text">t.league</h4>
                <hr/>
                <h3 style={{color:"#f5fffa",textSizeAdjust:"inherit"}} className="text">t.hometeam</h3>
              <h3 style={{color:"#f5fffa",textSizeAdjust:"inherit"}} className="text">t.awayteam </h3>
              <hr/>
              <div className='main'>
              <h4 style={{color:"black"}} className="tect">t.pick  <button className="shap" onClick={this.handleClick} value={this.state.click} >H</button>
              <button className="shape" onClick={this.handleClik} value={this.state.clik} >A</button>
              <button className="shep" onClick={this.handleClk} value={this.state.clk} >D</button>
              </h4>
              <h3 className='h32'>{clik}</h3>
              <h3 className='h31'>{click}</h3>
              <h3 className='h33'>{clk}</h3>
              </div>
            </div>
        </div>
        <div  className="grids" style={{textAlign:"auto",color:"black",fontFamily:"helvetica"}}>
            <div className="boxes" >
                <h4 style={{color:"black",textSizeAdjust:"inherit"}} className="text">t.league</h4>
                <hr/>
                <h3 style={{color:"#f5fffa",textSizeAdjust:"inherit"}} className="text">t.hometeam
                </h3>
              <h3 style={{color:"#f5fffa",textSizeAdjust:"inherit"}} className="text">t.awayteam </h3>
              <hr/>
              <div className='main'>
              <h4 style={{color:"black"}} className="tect">t.pick <button className="shap" onClick={this.handleClick} value={this.state.click} >H</button>
              <button className="shape" onClick={this.handleClik} value={this.state.clik}>A</button>
              </h4>
              <h3 className='h32'>{clik}</h3>
              <h3 className='h31'>{click}</h3>
              </div>
            </div>
        </div>
   </>
)
}
}
export default Container;