import React, { Component } from 'react'

class Clickcounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    incrementcount = () =>{
        this.setState(prevState => {
            return {count: prevState.count+1}
        })
    }

    render() {
        const{count}=this.state
        return (
            <div>
                <button onClick={this.incrementcount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default Clickcounter
