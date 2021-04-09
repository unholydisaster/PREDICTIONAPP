import React from "react"
import "aos/dist/aos.css"
import "cors"
import "./Boxes.css"

class Basketball extends React.Component{
    constructor(props){
       super(props)
         this.state={
           games:[]
           
            }
       this.updateClick=this.updateClick.bind(this)
       
       this.handleUpdate=this.handleUpdate.bind(this)
       

    }
    
    handleUpdate(e){
        if(e){
            return +1
        }
       
    }
      
   
    async componentDidMount(){
        
        const response=await fetch('https://stark-hollows-75541.herokuapp.com/api/sports')
        const data=await response.json()
        let item=data             
        this.setState({
            games:item      
        })

        
    }
    
    
    /*handle update for H*/ 

    updateClick(_id,hometeam,awayteam,league,pick,H,D,A){
        fetch(`https://stark-hollows-75541.herokuapp.com/api/sports/${_id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({_id,hometeam,awayteam,pick,league,H,D,A})
        })
        .then(()=>{
            let updatedGames=[...this.state.games].map(i=> i._id ===_id ?{...i,H,D,A}:i);
            this.setState({
                games:updatedGames
            });
        });
    }
     /*handle update for D*/ 
 

        


    render(){
        
return(
    <div>
        <h4 className="text">Todays Football Tips</h4>
        {this.state.games.map((t,i)=>(
        <div key={t._id} className="grids" style={{textAlign:"auto",color:"black",fontFamily:"helvetica"}}>
            <div className="boxes" >
                <h4 style={{color:"black",textSizeAdjust:"inherit"}} className="text">{t.league}</h4>
                <hr/>
                <h3 style={{color:"#f5fffa",textSizeAdjust:"inherit"}} className="text">{t.hometeam}</h3>
              <h3 style={{color:"#f5fffa",textSizeAdjust:"inherit"}} className="text">{t.awayteam}</h3>
              <hr/>
              <div className='main'>
              <h4 style={{color:"black"}} className="tect">{t.pick }<button className="shap"onClick={()=>this.updateClick(t._id, t.league, t.hometeam, t.awayteam, t.pick, t.D, t.A, this.handleUpdate(t.H))}>H</button>
              <button className="shape" onClick={()=>this.updateClick(t._id,t.league,t.hometeam,t.awayteam,t.pick,t.D,t.H, this.handleUpdate(t.A))} >A</button>
              <button className="shep" onClick={()=>this.updateClick(t._id,t.league,t.hometeam,t.awayteam,t.pick,t.H,t.A, this.handleUpdate(t.D))} >D</button>
              </h4>
              <h3 className='h32'>{t.A}</h3>
              <h3 className='h31'>{t.H}</h3>
              <h3 className='h33'>{t.D}</h3>
              </div>
            </div>
       </div>
      ))}</div>

   
    )
}
}
export default Basketball;


