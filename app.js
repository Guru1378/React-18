<<<<<<< HEAD
class User extends React.Component{

      constructor(props){
        super(props)
        this.state={
            count=0
        }
      }
      render(){
        const {count}=this.state
        return(
             
            <h1>I am Guru Prasad Nooliveedu</h1>
            <h3>{count}</h3>
            <button onClick={()=>{
                this.setState({
                    count:count+1
                })
            }}></button>
            
        )
      }


}
export default User
=======
import React from "react";
import ReactDOM from "react-dom/client";  // Correct import for React 18+
import Derived_data from "./DerivedState";
/*const header = (
    <h1>Hello Guru</h1>
);*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Derived_data/>);
>>>>>>> ca32a7107dcc9c231681f0093d60ca9b8628ae21
