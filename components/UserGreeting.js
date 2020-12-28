import React, { Component } from 'react'

export class UserGreeting extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            isLoggedIn: true
       }
   }
   
   
    render() {
       
        return this.state.isLoggedIn && <div>Welcome Leja</div>
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Leja</div>:
        //     <div>Welcome DOI</div>
        // )
       
        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Leja</div>
        // }
        // else{
        //     message = <div>Welcome DOI</div>
        // }
        // return <div>{message}</div>
        // if (this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Leja
        //         </div>
        //     )

        // }
        // else{
        //     return <div>Welcome DOI</div>
        // }
        // return (
        //     <div>
        //     <div>
        //         Welcome Leja
        //     </div>
        //     <div>
        //         Welcome Aprianza
        //     </div>
        //     </div>
        // )
    }
}

export default UserGreeting
