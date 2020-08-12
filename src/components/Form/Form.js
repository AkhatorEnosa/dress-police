import React from 'react';
import "./Form.css";


const Form = ({ onInputChange,onPictureSubmit, getName }) => {
	return(
			<div className="mt5 mb4">
	          <p className="yellow f6 f5-ns">Welcome, {getName}</p>

	            <div className="w-100 w-70-ns center flex flex-wrap justify-center ">
	              <input type="name" className = "w-70 w-40-ns pa2 pa3-ns mt1-s br2 input-reset ba bg-white-60 f7 f6-ns" placeholder="Paste Url" onChange = {onInputChange}/>

	              <button className = "w-30 w-20-ns f7 f6-ns pointer br3 mt2 mt0-ns ba b--yellow bg-yellow pa2 ml1 bg-animate grow border-box" onClick = {onPictureSubmit}>Submit</button>
	            </div>
	         </div>
		)
}

export default Form;