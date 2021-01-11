import React, { Component } from 'react'
import UpdatedComponent from './withCounter'



class HoverCounter extends Component {
    render() {
        // const {count} = this.state
        const{count, incrementcount} = this.props

        return (
            <div>
                <h2 onMouseOver={incrementcount}>Hover {count} times</h2>            
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter, 10)
