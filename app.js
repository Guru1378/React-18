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