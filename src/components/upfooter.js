import React from "react"


export default class Upfooter extends React.Component{
    render(){
        return(
            <>
            <div className="upfooter">
                <hr style={{color:"#008080",borderTop:'3px solid',width:'100%',margin:'-10px'}} />
            <br/>
            <br/>
            <h4 className="text">BetNinja offers daily free Football,Basketball,Icehockey Betting Tips </h4>
                <h3 className="text" style={{color:"#008080"}}>Remember this, folks - I am BetNinja, and I don't always Bet the same way I talk.
                Good advice is one thing, but smart gambling is quite another.
                </h3>
                <hr/>
            </div>
            </>
        )
    }
}