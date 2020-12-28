import React from 'react';


// function Greet(){
//     return <h1>Hello Leja</h1>
// }

const Greet =(props)=> {
    
//console.log(props)
const{name, heroName} = props
return (
<div>
<h1>{name} as {heroName}</h1>
</div>
)
}
export default Greet;
