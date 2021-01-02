import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifescycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Leja'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
    return true
    }
    
 getSnapshotBeforeUpdate(prevProps, prevState){
     console.log('LifecycleA getSnapshotBeforeUpdate')
     return null
 }

 componentDidUpdate(){
     console.log('LifecycleA componentDidUpdate')
 }

 changeState =() =>{
     this.setState(
     {
         name: 'aprianza'
     }
     )
 }
    render() {
        console.log('LifecycleA render')
        return (

        <div>

            <div>
                lifescycle A
            </div>
            <button onClick={this.changeState}>Change state</button>
            <LifecycleB/>
        </div>
        )
    }
}

export default LifescycleA
