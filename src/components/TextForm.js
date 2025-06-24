import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    
    const handleClearClick = () => {
        // console.log("TextClear was clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleTitleCaseClick = () => {
        let newText = text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
        setText(newText);
        props.showAlert("TitleCase Done!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On chnage");
        setText(event.target.value);
    }

    const handleCopy = () => {
        console.log("I am copy");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces Removed!", "success");
    }

    const [text, setText] = useState('');  //Enter text here!
    // text = "new text";    // Wrong way to change the state
    // setText("new text");  // Correct way to change the state 

    // ----------------------------------------------------------------------------
    const textareaStyle = {
    backgroundColor: props.mode === 'dark' ? '#212529' : props.themeColor,
    color: props.mode === 'dark' ? 'white' : 'black'
  };
  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{
    backgroundColor: props.mode === 'dark' ? '#212529' : props.themeColor, // use themeColor here
    color: props.mode === 'dark' ? 'white' : 'black'
  }} id="myBox" rows="8"></textarea>
            {/* style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} */}
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleTitleCaseClick}>Title Case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className="conatiner my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h1>Your text SUMMARY</h1>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text.trim().split(/\s+/).filter(word => word !== "").length} words and {text.replace(/\s/g, '').length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
