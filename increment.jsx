import { useState } from "react"
import "./index.css"
const Increment=()=>{

   let [count,setcount]=useState(0)
    
    function clicking(){
        setcount(count+1)
        console.log(count)
    }
    return (
        <div className="container">
            <h1 className="count-display">{count}</h1>
            <button className="click-button" onClick={clicking}>click here</button>
        
        </div>
        
    )

}
export default Increment