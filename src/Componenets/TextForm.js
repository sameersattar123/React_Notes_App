import React, { useState } from "react";

const TextForm = ({ heading , mode , showAlert}) => {

    const [ text  , setText] = useState("")

    const handleUpChanger = () =>{
        const CapitalText = text.toUpperCase()
        setText(CapitalText)
        showAlert("Converted to Uppercase" , "success")
    }
    
    const handleLowChanger = () =>{
        const CapitalText = text.toLowerCase()
        setText(CapitalText)
        showAlert("Converted to Lowercase" , "success")
    }
    
    const handleClearChanger = () =>{
        const CapitalText = ''
        setText(CapitalText)
        showAlert("Clear Text" , "success")
    }
    
    const handleReverseChanger= (str) =>{
        const CapitalText = text.split("").reverse().join("")
        setText(CapitalText)
        showAlert("Converted to Reverse Text" , "success") 
    }

    const handleOnChanger = (event) => {
        setText(event.target.value)
    }


  return (
    <div className="container"  style = {{ backgroundColor : mode==="dark"? "grey" : "white" ,  color : mode==="dark"? "white" : "black" }}>
      <h1>{heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleOnChanger}
          style = {{ backgroundColor : mode==="dark"? "grey" : "white" ,   color : mode==="dark"? "white" : "black"}}
        ></textarea>
      </div>
      <button disabled={text.length ==0} className="btn btn-primary mx-2 my-2" onClick={handleUpChanger} >Convert into Uppercase</button>
      <button disabled={text.length ==0} className="btn btn-primary mx-2 my-2" onClick={handleLowChanger} >Convert into Lowercase</button>
      <button disabled={text.length ==0} className="btn btn-primary mx-2 my-2" onClick={handleClearChanger} >Clear Text</button>
      <button disabled={text.length ==0} className="btn btn-primary mx-2 my-2" onClick={handleReverseChanger} >Reverse Text</button>
      <h3 className="my-3 ">Your text Summary</h3>
      <p>{text.split(/\s+/).filter((a)=>{return a.length!== 0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((a)=>{return a.length!== 0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
  );
};

export default TextForm;
