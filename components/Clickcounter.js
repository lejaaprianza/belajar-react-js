import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class Clickcounter extends Component {
    render() {
        // const{count}=this.state
        const{count, incrementcount} = this.props
        return (
            <div>
                <button onClick={incrementcount}>{this.props.name}Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(Clickcounter, 5)
