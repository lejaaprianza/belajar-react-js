import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import Hello from './components/Hello';
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ParentComponent from "./components/ParentComponent";
import EventBind from "./components/EventBind";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";




class App extends Component{
  render(){
    return(
      <div className="App">
        <NameList/>
      {/* <UserGreeting/> */}
        {/* <EventBind/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <FunctionClick/> */}
      {/* <ParentComponent/> */}
      {/* <ClassClick/> */}
      {/* <Welcome name="Clark"heroName="Superman"/>
      <Greet name="Leja" heroName="Aprianza"/> */}
        {/* <Greet name="Bruce" heroName="Batman"/>
        <Greet name="Clark"heroName="Superman"/>
        <Greet name="Diana"heroName="Wonderwoman"/>
      <Welcome name="Diana"heroName="Wonderwoman"/>
      <Welcome name="Clark"heroName="Superman"/>
      <Welcome name="Bruce"heroName="Batman"/> */}
        {/* <Hello/> */}
        </div>
      
    );
  }
}

export default App;
