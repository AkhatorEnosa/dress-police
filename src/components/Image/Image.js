import React from 'react';
import './Image.css';


const Image = ({ imageUrl }) => {
	return(
			<div className="center">
				<div className="">
					<img className="br3" id="input-image" width = "300px" height = "auto" alt="" src={imageUrl}/>
				</div>
			</div>
		)
}

export default Image; 