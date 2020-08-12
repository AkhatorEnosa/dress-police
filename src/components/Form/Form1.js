import React from 'react';
import "./Form.css";


const Form = ({ getName,fireMainComponent }) => {
	return(
			<div className="mt5 mb5">
	            <p className="yellow f6 f5-ns">What is your name?</p>

	            <div className="w-100 w-70-ns center flex flex-wrap justify-center ">
	              <input type="name" className = "w-70 w-40-ns pa2 pa3-ns mt1-s br2 input-reset ba bg-white-60 f7 f6-ns" onChange = {getName}/>

	              <button className = "w-30 w-20-ns f7 f6-ns pointer br2 mt2 mt0-ns ba b--yellow bg-yellow pa2 ml1 bg-animate grow border-box" onClick = {fireMainComponent}>Submit</button>
	            </div>
	         </div>
		)
}

export default Form;