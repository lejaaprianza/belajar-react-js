import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Leja'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.parentName} a.k.a ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
