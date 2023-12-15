import React, { useState } from "react";

export default function InputArea(props) {
  const [inp, setInp] = useState("");

//   to lower case
  const tolowercase = (e)=>{
      setInp(inp.toLowerCase())
  }

//   TO UPPER CASE
const TOUPPERCASE = (e)=>{
    setInp(inp.toUpperCase())
}

// new array without extra space 
let newStr ="";
let inpArr = inp.trim(" ");
for(let i =0; i<inpArr.length; i++){
    if((inpArr.charAt(i)===" ") && (inpArr.charAt(i+1)===" ")){
        continue;
    }
    else{
       newStr = newStr+inpArr.charAt(i)
    }
}
// remove extra space
const removeExtraSpace =(e)=>{
    setInp(newStr)
}

// capitalise format
const CapitaliseFormat =(e)=>{
    const capitaliseStr =(str)=> str[0].toUpperCase()+str.slice(1).toLocaleLowerCase()
    const capitaliseSentence = newStr.split(' ').map(capitaliseStr).join(" ");
    setInp(capitaliseSentence)
}

// copy to click board
const copyToClickBoard=()=>{
    document.getElementById("textArea").select()
    document.execCommand("copy")
    alert("Text is copid")
}
// clear text
const clearText =()=>{
    alert("Text is deleted")
    setInp("")
}
  return (
    <div className="InputArea" style={props.style} >
      <div className="container py-3 ">
        <textarea
          name=""
          id="textArea"
          rows="10"
          value={inp}
          style={{ width: "100%" }}
          onChange={(e)=> setInp(e.target.value)}
        ></textarea>
      </div>
      <div className="container my-3">
        <h3 >Text Summary</h3>
        <hr /><hr />
        <p>Your artical has {inp.length>0 ? newStr.split(" ").length : 0} words and {inp.length} characters</p>
        <p>Average time to read the artical is {(newStr.length/250).toFixed(2)} min</p>
      </div>
      <div className="container my-3" style={{height:"40vh"}}>
        <button type="button" onClick={tolowercase} className="btn btn-primary mx-1 my-1">
          to lower case
        </button>
        <button type="button" onClick={TOUPPERCASE} className="btn btn-secondary mx-1 my-1">
          TO UPPER CASE
        </button>
        <button type="button" onClick={removeExtraSpace} className="btn btn-warning mx-1 my-1">
          remove extra space
        </button>
        <button type="button" onClick={CapitaliseFormat} className="btn btn-info mx-1 my-1">
          Capitalise Format
        </button>
        <button type="button" onClick={copyToClickBoard} className="btn btn-success mx-1 my-1">
          copy to clickboard
        </button>
        <button type="button" onClick={clearText} className="btn btn-danger mx-1 my-1">
          clear text
        </button>
      </div>
    </div>
  );
}
