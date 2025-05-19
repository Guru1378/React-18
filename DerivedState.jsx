import people from "./data";
import "./data.css"
const Derived_data=()=>{

   let usercount=people.length
   let avg_age=people.reduce((acc,Element)=>{
          return Element.age+acc

   },0)

   return (
    <>
    <div>
        {
            people.map((ele,id)=>(
                <li key={id} style={{backgroundColor:ele.age>=18?"aqua":"antiquewhite"}}>{ele.name}-{ele.age}</li>
            ))
        }
        <li>average age : {avg_age/usercount}</li>
    </div>
    
    </>
   )

}
export default Derived_data