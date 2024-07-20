import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const [originalText, setOriginalText] = useState("");

        
    const theme = () => {
        if (props.mode === 'dark') {
            return {
                backgroundColor: '#293241',
                color: 'white'
            };
        } else if (props.mode === 'purple') {
            return {
                backgroundColor: '#7b2cbf',
                color: 'white'
            };
        } else {
            return {
                backgroundColor: 'white',
                color: 'black'
            };
        }
    };

    const textAreaTheme = () => {
        if (props.mode === 'dark') {
            return {
                backgroundColor: '#343a40',
                color: 'white'
            };
        } else if (props.mode === 'purple') {
            return {
                backgroundColor: '#3c096c',
                color: 'white'
            };
        } else {
            return {
                backgroundColor: 'white',
                color: 'black'
            };
        }
    };


    const handleUpperCase = () =>{
        // console.log("UpperCase was Clicked");
        setText(text.toUpperCase());
        props.showAlert("Coverted to UpperCase !!!", "success")
    }

    const handleLowerCase= () => {
        // console.log("LowerCase was Clicked");
        setText(text.toLowerCase());
        props.showAlert("Coverted to LowerCase !!!", "success")

    }

    const handleOriginal = () => {
        setText(originalText);
        props.showAlert("Reverted to original !!!", 'success');
    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
        setOriginalText(event.target.value);
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Text Cleared !!!","success")
    }

    const countWords = () => {
        const data = text.split(" ").filter(str => str !== '')
        return data.length

    }

    const countParagraph = () => {
        let paragraphs = text.split('\n').filter(paragraph => paragraph.trim(''));
        return paragraphs.length;
    }
    
    return (
        <>
        <div style={theme()}>
            <div className="mb-3">
                <h1 className='my-3'>{props.heading}</h1>
                <textarea className="form-control" value={text} id="myBox" rows="8" style={textAreaTheme()} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleOriginal}>Revert to Orginal</button>
            <button className="btn btn-dark clearButton" onClick={handleClear}>Clear</button>
            
        </div>
        <div className="container my-3" style={theme()}>
            <h2>Your Text Summary</h2>
            <p>{countWords()} words and {text.length} characters</p>
            <p>Read time : {Math.round(0.008 * text.split(" ").length)} Minutes</p>
            <p>Paragraph Count : {countParagraph()}</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter Something to Preview"}</p>
        </div>
        </>
  )
}
TextForm.prototype = {
    mode: PropTypes.oneOf(['dark','light','purple']).isRequired, 
}
// {color: props.mode === 'dark' ? 'white' : '#042743'}
