import React from "react";

const Hello = ()=>{
    // return(
    //     <div className='kelas'>
    //         <h1>Hello Gais</h1>
    //     </div>
    // )
    return React.createElement('div', {id:'Hallo', className:'kelas'},React.createElement('h1',null,'Hallo ges'))
}

export default Hello
