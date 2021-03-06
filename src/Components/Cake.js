import { Component } from "react";
import {Link} from 'react-router-dom';



class Cake extends Component {    
    constructor(props) {
        super(props)
        this.state = {}       
    }
    render() {
        // console.log("state,",this.props)
        return (
             <div style={{borderBlockStyle:"#DCE5EC 2px solid",backgroundColor:"#F0F3F4"}}>   
              <Link to={`/cakedetails/${this.props.cakedata.cakeid}`} style={ {textDecoration:"none"}}>
              <div class="card thumbnai" style={{width: "18.3rem" , margin:"1.5rem"}}>                  
              <img style={{height:"15em"}} src={this.props.cakedata.image} class="card-img-top rounded-lg" alt="..."></img>
                <div class="card-body" style={{color:"chocolate"}}>
                <h5 class="card-title">{this.props.cakedata.name}</h5>                
                <p class="card-text">Rs{this.props.cakedata.price}</p>  
        </div>
    </div>  
                </Link>
                
      
            </div>
        )
    }
}
export default Cake;