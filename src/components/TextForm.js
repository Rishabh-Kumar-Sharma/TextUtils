import React, { useState, useEffect } from "react"; // 'useState' is a 'hook' in React

export default function TextForm(props) {

    useEffect(()=> // to set the title of each page
      {document.title="TextUtils | Home"},[]);

    const handleUpClick=()=>{
        // console.log('Upper case was clicked');
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case','success');
    }
    const handleLoClick=()=>{
        // console.log('Upper case was clicked');
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case','success');
    }
    const handleOnChange=(event)=>{
        // console.log('On change');
        setText(event.target.value);
    }
    const handleCopy=()=>{
      //let texT=document.getElementById("myBox"); // no need to write these lines as the only required line is : *
      //texT.select();
      navigator.clipboard.writeText(text);  // *
      //document.getSelection().removeAllRanges();
      props.showAlert('Copied to Clipboard','success');
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Removed extra spaces','success');
    }
    const [text, setText] = useState('');
    /* // text="new text"; // wrong way of updation of 'text'
    setText("State changed!"); // right way to update the 'text' with the new text */
  return (
      <>
      <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary:</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length>0}).length} word(s) and {text.length} character(s)</p>
        <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length>0}).length)} minutes</p>
        <h2>Preview:</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  );
}
