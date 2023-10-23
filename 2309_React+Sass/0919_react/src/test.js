import { Component } from "react";

class Test extends Component {

    render() {
        const name = "황동준"
        const mystyle = {
            backgroundColor : "blue",
            color : 'orange',
            fontSize : '40px',
            padding : '12',    
        }

        return (
            <>
                <div style={mystyle}>{name}</div>
            </>
        )
    }
}

export default Test;