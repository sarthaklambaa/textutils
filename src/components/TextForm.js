import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpper = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Successfully converted to uppercase!", "success");
    }

    const handleLower = ()=>{
        // console.log("On Change");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Successfully converted to lowercase!", "success");
    }

    const handleClear = ()=>{
        // console.log("On Change");
        let newText = ('');
        setText(newText);
        props.showAlert("Cleared all the text", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Successfully copied the text!", "success");
    }

    const handlePaste = () => {
        navigator.clipboard.readText().then((pastedText) => {
          setText(pastedText);
          props.showAlert("Successfully pasted the text!", "success");
        }).catch((error) => {
          console.error("Failed to read clipboard data:", error);
          props.showAlert("Failed to paste the text.", "error");
        });
      };
    

    const [text, setText] = useState ("");

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="15"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpper}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleLower}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success mx-1 my-1" onClick={handlePaste}>Paste Text</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleClear}>Clear Text</button>
        </div>

        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>It will take about <b>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} minutes </b> to read the above text</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
