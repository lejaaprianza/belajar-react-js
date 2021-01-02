import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Leja'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Leja'
            })
        }, 2000)
    }
    
    render() {
    console.log('----------------------------------------' )
        return (
            <div>
                Parent Component              
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>  
            </div>
        )
    }
}

export default ParentComp
