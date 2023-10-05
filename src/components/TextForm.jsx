import { useState } from "react";
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, SetText] = useState("");

  // function WordsCount(theWords){
  //   let myWords = document.getElementById("myBox")

  //   if(myWords.length === ' '){
  //     // console.log("no words")
  //     return null 
  //   }
  //   else{
  //     return theWords
  //   }
  // }

  const newText = (e) =>{
    let updatedValue = e.target.value;
    SetText(updatedValue);
    
  }

  const convertUp =() =>{
    SetText (text.toUpperCase());
  }

  const convertLow =() =>{
    SetText (text.toLowerCase());
  }
  
  const convertClear =() =>{
    SetText ("");
  }

  const RemoveExtraSpace =()=>{
    let newText = text.split(/[ ]+/);
    SetText(newText.join(" "))
  }

  const CopyText = ()=>{
    let totalText = document.getElementById('myBox')
    totalText.select();
    navigator.clipboard.writeText(totalText.value)
    // console.log(totalText.value)
    props.showAlert("! Text Copied","success")
  }

  return (
    <div className="my-3 mx-5">
      <h1 className="Words">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={newText} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={convertUp}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={convertLow}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={convertClear}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={RemoveExtraSpace}>Remove Spaces</button>
      <button className="btn btn-primary mx-1" onClick={CopyText}>Copy Text</button>

      <p className="Words">{props.Length} :{text.length}</p>
      <p className="Words">{props.TotalWords} :{text.split(' ').filter(Boolean).length}</p>
      <p className="Words">It is a {0.008 * text.split(" ").length} minutes read</p>
      <p className="Words">{props.Preview} : {text}</p>
    </div>
  );
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired,
    Length : PropTypes.string.isRequired,
    TotalWords : PropTypes.string.isRequired,
    Preview : PropTypes.string.isRequired,
    showAlert : PropTypes.func
}




