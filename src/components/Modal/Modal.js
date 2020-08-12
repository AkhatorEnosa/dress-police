import React from 'react';


const Modal = ({ closeModal, getStatus }) => {
	return(
			<div className="w-90 w-30-ns f6 f5-ns bg-white-60 mt6 br4 center pa3 desc">
				<div className='w-100 tc'>
					
		     		<p className="f6 f5-ns desc-c">{getStatus}</p>
		     		<button className="w-30 f6 f7-ns pointer br3 mt2 ba b--yellow bg-yellow pa2 ml1 bg-animate grow border-box" onClick={closeModal}>Close</button>
	     		</div>
	     	</div>
		)
}

export default Modal;


	     		