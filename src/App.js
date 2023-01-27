import React, { useState } from "react";
import "./todoproject/Todo.css";
// import './App.css';
// import Todo from './component/Todo';
// import BasicFrom1 from './component/Forms/BasicFrom1';
// import UseStateObject from './component/UseStateObject'
// import UseEffects1 from './component/useEffect/UseEffects1';
// import ShortCirEval from './component/ShortCirEval';
// import UseStateArray from './component/UseStateArray'
// import BasicForm from './component/Forms/basicForm';
// import UseEffects from './component/useEffect/UseEffects2';
// import UseEffects2 from './component/useEffect/UseEffects2';
// import UseEffect3 from './component/useEffect/UseEffect3.js';
// import UseStateArray1 from './component/UseStateArray1';
import Todo from "./todoproject/Todo";

const App = () => {
  // console.log(useState("Nimesh Radadiya"));

  // let  myfristval= useState('Rdadiya')[0];
  // console.log(myfristval);

  // var val="Nimesh Technical";

  // const [myName, setMyName]=useState("Radadiya Parivar Ahemedabad");

  //   const changeName = ()=>{
  //  val="Nimesh Radadiya";
  //  console.log(val);
  //   let val=myName;
  //  if(val == 'Nimesh Techanical subc'){
  //   setMyName("nimesh");
  //  } else{
  //   setMyName('Nimesh Techanical subc');
  // //  }

  // let val=myName;
  // val == "Radadiya Parivar Ahemedabad"?
  //   setMyName("Sanskrutik Pogrammme"):setMyName("Radadiya Parivar Ahemedabad");

  //  }
  //      console.log(myName);

  return (
    <div>
      {/* <UseStateArray/> */}
      {/* <UseStateObject/> */}
      {/* <ShortCirEval/> */}
      {/* <BasicForm/> */}
      {/* <UseEffects1/> */}
      {/* <UseEffects2/> */}
      {/* <UseEffect3/> */}
      {/* <UseStateArray1/> */}
      {/* <BasicFrom1/> */}
      {/* <Todo/> */}
      <Todo />
    </div>
  );
};

export default App;
